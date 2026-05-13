export function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D6E8FF] via-[#C5D9F5] to-[#B0CCEC]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.5),transparent)]" />
    </div>
  );
}
