interface Props {
  row: string;
  val: React.ReactNode;
  muted?: boolean;
}

export function Receipt({ row, val, muted }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
      <span style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>{row}</span>
      <span style={{
        color: muted ? 'var(--muted)' : 'var(--ink-2)',
        fontWeight: muted ? 400 : 500,
        whiteSpace: 'nowrap', textAlign: 'right',
      }}>{val}</span>
    </div>
  );
}
