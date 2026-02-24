import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Toaster, toast } from 'sonner';

export default function App() {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("landscape");
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? "portrait" : "landscape");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast('SYSTEM READY', {
        description: 'SECURE UPLINK RECOMMENDED. PLEASE AUTHENTICATE TO ACCESS FULL NEURAL ENGINE CAPABILITIES.',
        duration: 6000,
        position: 'top-center',
      });
    }
  }, [isLoaded, isSignedIn]);

  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-midnight text-white font-sans ${orientation}`}>
      <Toaster 
        theme="dark" 
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(10, 15, 31, 0.9)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            color: '#ffffff',
            backdropFilter: 'blur(12px)',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            fontSize: '10px',
            letterSpacing: '0.05em',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
          },
        }}
      />
      {/* Background Layer */}
      <div className="bg-scene" />
      <div className="vignette" />
      <div className="grid-floor" />
      <div className="light-streak" style={{ left: '15%' }} />
      <div className="light-streak" style={{ right: '20%' }} />

      <Header />

      {/* CORE UI: Now visible for both authenticated and public states */}
      <Main orientation={orientation} />
    </div>
  );
}
