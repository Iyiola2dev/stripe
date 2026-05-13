export function PageBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', width: '50vw', height: '50vw',
        left: '-10vw', top: '-15vw', borderRadius: '50%',
        filter: 'blur(80px)', opacity: .55,
        background: 'radial-gradient(circle, #f3c98b 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', width: '55vw', height: '55vw',
        right: '-12vw', top: '10vw', borderRadius: '50%',
        filter: 'blur(80px)', opacity: .55,
        background: 'radial-gradient(circle, #c9a9f5 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', width: '40vw', height: '40vw',
        left: '30vw', bottom: '-20vw', borderRadius: '50%',
        filter: 'blur(80px)', opacity: .4,
        background: 'radial-gradient(circle, #f0a98c 0%, transparent 65%)',
      }} />
    </div>
  );
}
