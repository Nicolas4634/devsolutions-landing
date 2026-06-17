export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="glow-orb -top-40 left-1/4 h-[500px] w-[500px] bg-violet-600/20" />
      <div className="glow-orb top-1/3 -right-20 h-[400px] w-[400px] bg-blue-600/15" />
      <div className="glow-orb bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 bg-cyan-600/10" />
      <div className="absolute inset-0 grid-pattern" />
    </div>
  );
}
