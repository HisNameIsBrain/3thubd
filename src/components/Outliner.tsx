import { useScene } from "../store/useScene";

export default function Outliner() {
  const { objects, select, selected } = useScene();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="label-caps text-cyan">Scene Outliner</h2>
        <div className="flex gap-2">
           <button className="text-[10px] text-white/30 hover:text-cyan">🔍</button>
           <button className="text-[10px] text-white/30 hover:text-cyan">⊕</button>
        </div>
      </div>
      
      <div className="space-y-1 overflow-y-auto pr-2 custom-scrollbar">
        {objects.map((obj, i) => (
          <div
            key={i}
            className={`group flex items-center gap-3 p-2 rounded cursor-pointer transition-all border-l-2
              ${selected === obj.id 
                ? "bg-cyan/10 border-l-cyan text-white" 
                : "border-l-transparent text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            onClick={() => select(obj.id)}
          >
            <span className={`text-[10px] ${selected === obj.id ? 'text-cyan' : 'text-white/20'}`}>
              {obj.type === 'Mesh' ? '■' : obj.type === 'Light' ? '☀' : '◬'}
            </span>
            <span className="text-xs font-mono flex-1 truncate uppercase tracking-tighter">
              {obj.name}
            </span>
            <div className={`opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity`}>
               <button className="text-[10px] hover:text-cyan">👁</button>
               <button className="text-[10px] hover:text-cyan">🔒</button>
            </div>
          </div>
        ))}
        
        {objects.length === 0 && (
          <div className="text-center py-8 opacity-20 italic text-[10px] uppercase tracking-widest">
            Scene is empty
          </div>
        )}
      </div>
    </div>
  );
}
