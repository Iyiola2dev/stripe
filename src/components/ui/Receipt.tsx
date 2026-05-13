interface Props { row: string; val: React.ReactNode; muted?: boolean; }

export function Receipt({ row, val, muted }: Props) {
  return (
    <div className="flex justify-between gap-3 text-[13px]">
      <span className="text-muted whitespace-nowrap">{row}</span>
      <span className={`whitespace-nowrap text-right ${muted ? 'text-muted font-normal' : 'text-ink-2 font-medium'}`}>
        {val}
      </span>
    </div>
  );
}
