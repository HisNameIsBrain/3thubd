import { motion } from "framer-motion";

interface WorkspaceTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function WorkspaceTabs({
  tabs,
  activeTab,
  onTabChange,
}: WorkspaceTabsProps) {
  return (
    <div className="flex gap-1 p-1 glass-panel rounded-lg relative">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors rounded z-10
            ${activeTab === tab ? "text-cyan" : "text-white/40 hover:text-white/70"}`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-cyan/10 border border-cyan/30 rounded shadow-[0_0_10px_rgba(0,255,255,0.1)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}
