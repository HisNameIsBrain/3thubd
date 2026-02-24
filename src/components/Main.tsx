import Viewport from "./Viewport";
import Toolbar from "./Toolbar";
import Outliner from "./Outliner";
import Inspector from "./Inspector";
import UserConnectionStatus from "./UserConnectionStatus";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MainProps {
  orientation: "portrait" | "landscape";
}

export default function Main({ orientation }: MainProps) {
  const [selectedTool, setSelectedTool] = useState("Select");
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>("pink-cube");

  return (
    <main className={`flex flex-1 overflow-hidden relative p-2 gap-2 ${orientation === 'portrait' ? 'flex-col' : 'flex-row'}`}>
      {/* Left Toolbar - Vertical Dock */}
      <motion.div 
        layout
        className={`flex ${orientation === 'portrait' ? 'flex-row h-16 w-full' : 'flex-col w-16 h-full'} z-40`}
      >
        <Toolbar activeTool={selectedTool} onToolChange={setSelectedTool} />
      </motion.div>

      {/* Center Viewport */}
      <motion.div 
        layout
        className="flex-1 relative glass-panel rounded-xl overflow-hidden shadow-inner"
      >
        <Viewport onSelect={setSelectedObjectId} selectedId={selectedObjectId} />
        
        {/* Bottom Command Dock (Portrait Mode Only in specific layout) */}
        {orientation === 'portrait' && (
          <div className="absolute bottom-4 left-4 right-4 flex justify-center z-50">
            <CommandDock />
          </div>
        )}
      </motion.div>

      {/* Right Side Panels (Landscape Mode) */}
      <AnimatePresence>
        {orientation === 'landscape' && (
          <motion.aside 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-80 flex flex-col gap-2 z-40"
          >
            <div className="h-1/2 glass-panel rounded-xl p-4 overflow-hidden flex flex-col">
              <Inspector selectedId={selectedObjectId} />
            </div>
            
            <div className="flex-1 glass-panel rounded-xl p-4 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="label-caps text-cyan font-black">Structure</h3>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest cursor-pointer hover:text-cyan">Edit</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <Outliner />
              </div>
            </div>

            <div className="h-48 glass-panel rounded-xl p-4 overflow-hidden flex flex-col">
              <h3 className="label-caps text-cyan mb-4 font-black">Asset Matrix</h3>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <AssetMatrix />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Connection Status Indicator */}
      <UserConnectionStatus isOnline={true} />
    </main>
  );
}

function CommandDock() {
  const commands = ["Move", "Rotate", "Scale", "Inspect", "Build", "Sync"];
  return (
    <div className="flex gap-2 glass-panel p-2 rounded-2xl w-full max-w-md justify-around">
      {commands.map(cmd => (
        <button key={cmd} className="flex-1 py-3 px-1 rounded-xl bg-charcoal/30 border border-cyan/20 hover:border-cyan hover:bg-cyan/10 transition-all text-[10px] uppercase font-bold tracking-tighter text-white/80 hover:text-cyan shadow-lg">
          {cmd}
        </button>
      ))}
    </div>
  );
}

function AssetMatrix() {
  const assets = Array(12).fill(0);
  return (
    <div className="grid grid-cols-3 gap-3">
      {assets.map((_, i) => (
        <div key={i} className="aspect-square glass-panel rounded-lg hover:border-cyan cursor-pointer transition-all flex items-center justify-center group">
          <div className={`w-8 h-8 ${i % 3 === 0 ? 'bg-magenta' : i % 3 === 1 ? 'bg-cyan' : 'bg-gray-400'} rounded-sm opacity-60 group-hover:opacity-100 shadow-xl`} />
        </div>
      ))}
    </div>
  );
}

function AssetLibrary() {
  const items = [
    { name: "Cube_Primitive", type: "Mesh", size: "12kb" },
    { name: "Sphere_HighPoly", type: "Mesh", size: "45kb" },
    { name: "Grid_Floor", type: "Helper", size: "2kb" },
  ];
  return (
    <div className="space-y-2">
      {items.map(item => (
        <div key={item.name} className="flex justify-between items-center p-2 rounded bg-charcoal/20 hover:bg-cyan/5 border border-white/5 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-mono">{item.name}</span>
            <span className="text-[10px] text-white/40">{item.type}</span>
          </div>
          <span className="text-[10px] text-white/40">{item.size}</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
         {/* Primitive Shape Icons dock */}
         <div className="w-8 h-8 rounded border border-cyan/30 flex items-center justify-center hover:bg-cyan/20">■</div>
         <div className="w-8 h-8 rounded border border-cyan/30 flex items-center justify-center hover:bg-cyan/20">●</div>
         <div className="w-8 h-8 rounded border border-cyan/30 flex items-center justify-center hover:bg-cyan/20">▲</div>
      </div>
    </div>
  );
}
