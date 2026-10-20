"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

// three.js + rapier (~1 MB JS) and the 2.4 MB card model are only fetched on
// capable desktops, on the visitor's first interaction (pointer move, scroll,
// key press) — so they never compete with the first render. Everyone else — phones,
// touch devices, reduced-motion users, no WebGL — gets the static card,
// which is also what desktop users see until the 3D scene is ready.
const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

const CAN_USE_3D = "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroCard() {
  const [load3d, setLoad3d] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const frameRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current = frameRef.current?.closest("section") ?? null;
    if (!window.matchMedia(CAN_USE_3D).matches || !supportsWebGL()) return;
    const events = ["pointermove", "pointerdown", "scroll", "keydown"];
    const start = () => {
      events.forEach((e) => window.removeEventListener(e, start));
      setLoad3d(true);
    };
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, start));
  }, []);

  return (
    <div ref={frameRef} className="relative h-full w-full">
      {/* Static card: hangs from a CSS "lanyard" and sways gently. */}
      <div
        aria-hidden={ready}
        className={cn(
          "absolute inset-x-0 top-0 flex flex-col items-center transition-opacity duration-(--dur-slow)",
          ready ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <div className="animate-sway flex flex-col items-center">
          <span aria-hidden="true" className="h-16 w-5 bg-ink lg:h-[18vh] lg:min-h-24" />
          <span aria-hidden="true" className="-mt-1 h-6 w-10 rounded-b-control bg-line-strong" />
          <Image
            src={profile.idCard}
            alt={`${profile.name}'s ID card — ${profile.studio}, software engineer`}
            width={720}
            height={1087}
            priority
            draggable={false}
            sizes="(min-width: 1024px) 300px, 240px"
            className="-mt-1 w-52 rounded-card shadow-lift sm:w-60 lg:w-[300px]"
          />
        </div>
      </div>

      {/* The canvas bleeds past this column (over the text and below the hero)
          so the card isn't cropped when dragged; frameRef keeps its size and
          resting spot, and pointer events come from the hero section so the
          canvas never blocks the links underneath it. */}
      {load3d && (
        <div
          role="img"
          aria-label={`Interactive 3D ID card of ${profile.name} hanging from a lanyard — drag to swing, click to flip`}
          className={cn(
            "pointer-events-none absolute -bottom-[40%] -left-[170%] -right-[30%] top-0 transition-opacity duration-(--dur-slow)",
            ready ? "opacity-100" : "opacity-0"
          )}
        >
          <Lanyard
            frameRef={frameRef}
            eventSource={sectionRef}
            position={[0, 0, 13]}
            anchorX={0}
            gravity={[0, -40, 0]}
            frontImage="/assets/Lanyard/pamu-idcard.png"
            backImage="/assets/Lanyard/pamu-idcard-back.png"
            imageFit="contain"
            lanyardImage="/assets/Lanyard/lanyard.png"
            lanyardWidth={1}
            onReady={onReady}
          />
        </div>
      )}
      {load3d && (
        <p className={cn("eyebrow pointer-events-none absolute bottom-2 right-0 text-ink-muted transition-opacity duration-(--dur-slow)", ready ? "opacity-100" : "opacity-0")}>
          Drag me · click to flip
        </p>
      )}
    </div>
  );
}
