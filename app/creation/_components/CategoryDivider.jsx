export default function CategoryDivider({ label }) {
  return (
    <div className="flex items-center justify-center gap-4 bg-primary px-6 py-10">
      <span className="h-px w-12 bg-white/15" />
      <span className="text-[10.5px] uppercase tracking-[0.18em] text-white/40">{label}</span>
      <span className="h-px w-12 bg-white/15" />
    </div>
  );
}
