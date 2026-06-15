export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #60A5FA, transparent 70%)', animation: 'float 8s ease-in-out infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
