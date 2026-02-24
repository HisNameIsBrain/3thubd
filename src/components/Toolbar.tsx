import { motion } from "framer-motion";

interface ToolbarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
}

export default function Toolbar({ activeTool, onToolChange }: ToolbarProps) {
  const tools = ["Select", "Transform", "Edit", "Material", "Camera", "Light", "Render"];
  const icons = {
    Select: "⬚",
    Transform: "✢",
    Edit: "✎",
    Material: "❂",
    Camera: "📷",
    Light: "💡",
    Render: "◈"
  };

  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col h-full glass-panel rounded-2xl p-2 gap-4 items-center justify-center py-6 shadow-2xl relative z-40"
    >
      {tools.map((tool, index) => (
        <motion.button
          key={tool}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToolChange(tool)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all relative group
            ${activeTool === tool 
              ? 'bg-cyan/20 border-2 border-cyan shadow-[0_0_15px_rgba(0,255,255,0.4)]' 
              : 'border border-cyan/30 hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]'
            }`}
          title={tool}
        >
          <span className={`text-xl transition-colors ${activeTool === tool ? 'text-cyan' : 'text-cyan/60 group-hover:text-cyan'}`}>
            {icons[tool as keyof typeof icons] || "?"}
          </span>
          
          {/* Label Tooltip */}
          <div className="absolute left-14 px-2 py-1 rounded bg-charcoal border border-cyan/50 text-[10px] text-cyan opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase font-bold tracking-widest z-50">
            {tool}
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}
