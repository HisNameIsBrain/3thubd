import { motion, AnimatePresence } from "framer-motion";

interface ViewportProps {
  onSelect: (id: string | null) => void;
  selectedId: string | null;
}

export default function Viewport({ onSelect, selectedId }: ViewportProps) {
  return (
    <div 
      className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#050A15]/50 cursor-move"
      onClick={() => onSelect(null)}
    >
      {/* 3D Perspective Space */}
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        
        {/* Perspective Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '100px 100px',
               transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(3)'
             }} 
        />

        {/* Scene Objects */}
        <div className="relative flex items-end gap-12 pb-20">
          
          {/* Neutral Gray Cube */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("gray-cube")}
            className={`w-24 h-24 bg-gray-600 relative cursor-pointer transition-all duration-300
              ${selectedId === "gray-cube" ? "selection-glow scale-110" : "hover:bg-gray-500"}
            `}
            style={{ 
              transform: 'perspective(500px) rotateY(-20deg) rotateX(10deg)',
              boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.5), 5px 5px 15px rgba(0,0,0,0.3)'
            }}
          >
            <span className="absolute -top-8 left-0 w-full text-center label-caps text-[10px] opacity-70">Cube_Static</span>
          </motion.div>

          {/* Glossy Cyan Sphere */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("cyan-sphere")}
            className={`w-32 h-32 rounded-full cursor-pointer transition-all duration-500 relative
              ${selectedId === "cyan-sphere" ? "selection-glow scale-110 animate-bloom" : "hover:scale-105"}
            `}
            style={{ 
              background: 'radial-gradient(circle at 30% 30%, #00FFFF, #008080 60%, #004040 100%)',
              boxShadow: '0 0 30px rgba(0,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.4)',
              transform: 'translateY(-20px)'
            }}
          >
            <span className="absolute -top-8 left-0 w-full text-center label-caps text-[10px] opacity-70">Sphere_Glossy</span>
            <div className="absolute top-4 left-6 w-4 h-4 bg-white/40 blur-sm rounded-full" />
          </motion.div>

          {/* Matte Pink Cube */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("pink-cube")}
            className={`w-20 h-20 bg-[#FF69B4] relative cursor-pointer transition-all duration-300
              ${selectedId === "pink-cube" ? "selection-glow scale-110" : "hover:brightness-110"}
            `}
            style={{ 
              transform: 'perspective(500px) rotateY(15deg) rotateX(5deg)',
              boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.2), 3px 3px 10px rgba(0,0,0,0.2)'
            }}
          >
            <span className="absolute -top-8 left-0 w-full text-center label-caps text-[10px] opacity-70">Cube_Matte</span>
          </motion.div>

        </div>

        {/* World Axes Indicator */}
        <div className="absolute bottom-6 left-6 w-12 h-12 flex items-center justify-center opacity-50">
          <div className="absolute w-full h-[1px] bg-red-500 transform rotate-0" />
          <div className="absolute h-full w-[1px] bg-green-500" />
          <div className="absolute w-[1px] h-[1px] bg-blue-500 scale-[20] rounded-full shadow-[0_0_10px_blue]" />
        </div>

        {/* Selected Object Info (HUD) */}
        <AnimatePresence>
          {selectedId && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="absolute top-6 left-6 glass-panel p-3 rounded-lg border-l-4 border-l-gold shadow-2xl z-50 pointer-events-none"
            >
               <h4 className="label-caps text-gold text-[9px] mb-1">Active Selection</h4>
               <p className="text-xl font-bold tracking-tighter uppercase">{selectedId.replace('-', ' ')}</p>
               <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2 font-mono text-[8px] text-cyan/70 uppercase">
                  <div className="flex justify-between"><span>Pos</span> <span>0.0, 1.2, -4.5</span></div>
                  <div className="flex justify-between pl-4"><span>Verts</span> <span>2,402</span></div>
                  <div className="flex justify-between"><span>Rot</span> <span>0, 45, 0</span></div>
                  <div className="flex justify-between pl-4"><span>Polys</span> <span>1,180</span></div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
