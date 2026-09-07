// Stand-in for the real photography the design calls for (see instruction.txt).
// A dark gradient + hairline texture matching the site's primary/accent palette —
// swap for a real <Image> once photos are ready.
export default function PlaceholderPhoto({ className = "", tone = "dark", label }) {
  const tones = {
    dark: "from-[#2a2a30] via-[#1c1c22] to-[#0d0d10]",
    accent: "from-[#1c1c22] via-[#173028] to-[#0d0d10]",
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tones[tone] ?? tones.dark} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,255,153,0.08) 0px, rgba(0,255,153,0.08) 1px, transparent 1px, transparent 14px)",
        }}
      />
      {label && (
        <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
      )}
    </div>
  );
}
