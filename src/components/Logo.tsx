export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer Hexagon/Shape */}
        <div className="absolute inset-0 border-2 border-cyan/50 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
        <div className="absolute inset-0 border-2 border-magenta/30 -rotate-45 group-hover:-rotate-90 transition-transform duration-700" />
        
        {/* Core */}
        <div className="w-4 h-4 bg-cyan shadow-[0_0_15px_rgba(0,255,255,1)] group-hover:scale-125 transition-transform" />
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter leading-none group-hover:text-cyan transition-colors">
          3THUB <span className="text-cyan">ENGINE</span>
        </span>
        <span className="text-[8px] tracking-[0.3em] font-bold text-white/40 uppercase">v2.4.0d-dev</span>
      </div>
    </div>
  );
}
