import Logo from "./Logo";
import WorkspaceTabs from "./WorkspaceTabs";
import UserAuthentication from "./UserAuthentication";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between p-3 glass-panel m-2 rounded-xl z-50 gap-4"
    >
      <div className="flex items-center space-x-6 shrink-0">
        <Logo />
        <div className="hidden lg:block">
          <WorkspaceTabs
            tabs={["Modeling", "Sculpt", "UV", "Shading", "Render"]}
            activeTab="Modeling"
            onTabChange={() => {}}
          />
        </div>
      </div>

      <div className="flex-1 max-w-xl hidden md:flex items-center bg-black/20 border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-cyan/50 transition-all group">
        <span className="text-white/30 group-focus-within:text-cyan mr-2">🔍</span>
        <input 
          type="text" 
          placeholder="SEARCH ASSETS, TOOLS, OR NODES..." 
          className="bg-transparent border-none outline-none text-[10px] w-full text-white/70 font-mono tracking-widest placeholder:text-white/20"
        />
        <span className="text-white/20 text-[8px] font-bold border border-white/10 px-1 rounded ml-2">⌘K</span>
      </div>

      <div className="flex items-center space-x-4 shrink-0">
        <UserAuthentication />
      </div>
    </motion.header>
  );
}
