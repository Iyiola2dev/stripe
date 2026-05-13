export function CardSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white shadow-card overflow-hidden relative">
      {children}
    </div>
  );
}
