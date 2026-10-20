/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// Files in /public are served at the site root and must be referenced as
// plain URL strings at runtime, not imported as JS modules — Next.js has no
// bundler loader for .glb/.png imports the way Vite's default asset handling does.
const cardGLB = '/assets/Lanyard/card.glb';
const lanyard = '/assets/Lanyard/lanyard.png';

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel — lets useTexture be called unconditionally when a
// front/back image isn't supplied.
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// The card model's front face is UV-mapped to the LEFT half of the texture
// atlas and the back face to the RIGHT half (measured from card.glb). Each
// custom image is composited into its own half so the two faces render
// independently, aspect-preserving (no stretching).
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0, 30],
  anchorX = 0,
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  // Optional: the element whose box the card is framed in. The canvas can then
  // be larger than that box (so the card can be dragged past it) while the
  // card keeps the size and resting spot it would have inside the box.
  frameRef = null,
  // Optional: element that receives pointer events instead of the canvas, so
  // an oversized canvas doesn't block the page underneath it.
  eventSource,
  onReady
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const containerRef = useRef(null);
  const glRef = useRef(null);
  const cameraRef = useRef(null);
  const applySizeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Safety net for a known R3F-in-Next.js quirk: after a client-side route
  // navigation away and back, the canvas can end up stuck rendering at a
  // stale (small) size even though its container is the correct size again.
  // Watching the container directly and re-applying gl/camera size whenever
  // it changes (mount included) keeps it in sync regardless of when that
  // internal resize handling misses a beat. It also runs from onCreated:
  // the renderer is created asynchronously, so on a remount (navigating back
  // to the page) the first calls here can happen before gl/camera exist, and
  // without a later resize the camera would keep its unframed defaults.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const applySize = () => {
      const gl = glRef.current;
      const camera = cameraRef.current;
      const { clientWidth: w, clientHeight: h } = el;
      if (!gl || !camera || w === 0 || h === 0) return;
      gl.setSize(w, h);
      camera.aspect = w / h;
      // Frame the scene on frameRef: scale the vertical fov by canvas/frame
      // height and shift the camera so world x=0 sits on the frame's centre.
      const frame = frameRef?.current;
      let fovNow = fov, dx = 0, dy = 0;
      if (frame && frame.offsetHeight > 0) {
        const c = el.getBoundingClientRect();
        const fr = frame.getBoundingClientRect();
        const t = Math.tan(THREE.MathUtils.degToRad(fov / 2));
        fovNow = THREE.MathUtils.radToDeg(2 * Math.atan((t * c.height) / fr.height));
        const unitsPerPx = (2 * position[2] * t) / fr.height;
        dx = -(fr.left + fr.width / 2 - (c.left + c.width / 2)) * unitsPerPx;
        dy = (fr.top + fr.height / 2 - (c.top + c.height / 2)) * unitsPerPx;
      }
      camera.fov = fovNow;
      camera.position.set(position[0] + dx, position[1] + dy, position[2]);
      camera.updateProjectionMatrix();
    };
    applySizeRef.current = applySize;
    const ro = new ResizeObserver(applySize);
    ro.observe(el);
    if (frameRef?.current) ro.observe(frameRef.current);
    applySize();
    return () => {
      ro.disconnect();
      applySizeRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full flex justify-center items-center">
      <Canvas
        camera={{ position: position, fov: fov, rotation: [0, 0, 0] }}
        eventSource={eventSource}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl, camera, setEvents }) => {
          glRef.current = gl;
          cameraRef.current = camera;
          applySizeRef.current?.();
          // With an outside event source, measure the pointer against the
          // canvas itself (R3F's default uses offsetX of whatever was hit).
          if (eventSource) {
            setEvents({
              compute: (event, state) => {
                const r = state.gl.domElement.getBoundingClientRect();
                state.pointer.set(((event.clientX - r.left) / r.width) * 2 - 1, -((event.clientY - r.top) / r.height) * 2 + 1);
                state.raycaster.setFromCamera(state.pointer, state.camera);
              }
            });
          }
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            anchorX={anchorX}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
            onReady={onReady}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  anchorX = 0,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  onReady
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardImage || lanyard);
  // useTexture must be called unconditionally; use a blank pixel when an image
  // isn't supplied for a given face, then skip compositing it below.
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Composite the front/back images into the card's texture atlas (front = left
  // half, back = right half). Each image is drawn aspect-preserving (no stretch).
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    // Keep the original baked atlas for the card edges and any untouched face.
    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img, rect) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === 'contain' ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
    if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const cardVisualRef = useRef();
  const pointerDownRef = useRef(null);

  // Band only renders once the GLB + textures have resolved (they suspend),
  // so mounting here means the scene is ready to be shown.
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  // Shared by pointerdown/up so the same listener is added and removed.
  const swallowClick = useMemo(() => ev => { ev.preventDefault(); ev.stopPropagation(); }, []);

  // The card can be dragged over text; don't select it on the way.
  useEffect(() => {
    if (!dragged) return;
    document.body.style.userSelect = 'none';
    return () => void (document.body.style.userSelect = '');
  }, [dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      // Pointer ray hits the z=0 plane the card hangs in (the camera may be
      // shifted off-axis by frameRef, so don't assume it sits on the z axis).
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.copy(state.camera.position).add(dir.multiplyScalar(-state.camera.position.z / dir.z));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
    if (cardVisualRef.current) {
      // Purely visual — spins the rendered mesh 180° to show the back face
      // without touching the physics body/collider underneath.
      const target = flipped ? Math.PI : 0;
      cardVisualRef.current.rotation.y = THREE.MathUtils.lerp(
        cardVisualRef.current.rotation.y,
        target,
        1 - Math.pow(0.001, delta)
      );
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[anchorX, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            ref={cardVisualRef}
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerDown={e => {
              e.target.setPointerCapture(e.pointerId);
              // The card can sit over links; swallow the click that follows
              // this press so releasing the card doesn't follow a link.
              window.addEventListener('click', swallowClick, true);
              pointerDownRef.current = { x: e.clientX, y: e.clientY };
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
            onPointerUp={e => {
              e.target.releasePointerCapture(e.pointerId);
              setTimeout(() => window.removeEventListener('click', swallowClick, true), 0);
              drag(false);
              const start = pointerDownRef.current;
              pointerDownRef.current = null;
              // A "click" (barely any pointer movement) flips the card;
              // an actual drag gesture leaves it as-is.
              if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) < 6) {
                setFlipped(f => !f);
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
