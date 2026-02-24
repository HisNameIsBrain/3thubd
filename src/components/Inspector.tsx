import { motion } from "framer-motion";

interface InspectorProps {
  selectedId: string | null;
}

export default function Inspector({ selectedId }: InspectorProps) {
  if (!selectedId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-white/20 uppercase tracking-[0.2em] font-bold text-[10px] space-y-4">
        <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center animate-pulse">
           ◌
        </div>
        <span>No Selection</span>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col gap-4"
    >
      <header className="flex justify-between items-center border-b border-white/10 pb-2">
        <h3 className="label-caps text-gold">Properties</h3>
        <span className="text-[10px] text-white/30 font-mono italic">#{selectedId}</span>
      </header>

      <section className="space-y-4">
        {/* Transform Group */}
        <div className="space-y-2">
          <h4 className="text-[9px] font-black text-white/40 uppercase tracking-widest">Transform</h4>
          <div className="grid grid-cols-1 gap-2">
            {['Position', 'Rotation', 'Scale'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[8px] text-white/30 w-12">{label}</span>
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {['X', 'Y', 'Z'].map((axis) => (
                    <div key={axis} className="bg-black/40 border border-white/5 rounded px-1.5 py-1 flex items-center">
                      <span className="text-[8px] text-white/20 mr-1.5 font-bold">{axis}</span>
                      <input 
                        type="text" 
                        defaultValue="0.0" 
                        className="bg-transparent border-none outline-none text-[9px] w-full text-cyan font-mono"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visibility Group */}
        <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
           <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Visibility</span>
           <div className="w-8 h-4 bg-cyan/20 rounded-full relative flex items-center px-1 cursor-pointer border border-cyan/30">
              <div className="w-2.5 h-2.5 bg-cyan rounded-full shadow-[0_0_5px_rgba(0,255,255,0.8)] translate-x-3" />
           </div>
        </div>

        {/* Data Group */}
        <div className="space-y-2">
          <h4 className="text-[9px] font-black text-white/40 uppercase tracking-widest">Geometry Data</h4>
          <div className="space-y-1">
             <div className="flex justify-between text-[9px] font-mono">
                <span className="text-white/30">Vertices</span>
                <span className="text-white/60">2,402</span>
             </div>
             <div className="flex justify-between text-[9px] font-mono">
                <span className="text-white/30">Polygons</span>
                <span className="text-white/60">1,180</span>
             </div>
          </div>
        </div>
      </section>

      <button className="mt-4 w-full py-2 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500/20 transition-all rounded">
        Delete Object
      </button>
    </motion.div>
  );
}
