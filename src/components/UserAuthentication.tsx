import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

export default function UserAuthentication() {
  return (
    <div className="flex items-center gap-4">
      {/* Signed out state */}
      <SignedOut>
        <div className="flex gap-2">
          <div className="bg-cyan/10 hover:bg-cyan/20 text-white text-[10px] px-4 py-1.5 rounded border border-cyan/30 transition-colors cursor-pointer">
            <SignInButton mode="modal" />
          </div>
          <div className="bg-cyan/20 hover:bg-cyan/30 text-white text-[10px] px-4 py-1.5 rounded border border-cyan/50 transition-colors cursor-pointer">
            <SignUpButton mode="modal" />
          </div>
        </div>
      </SignedOut>

      {/* Signed in state */}
      <SignedIn>
        <div className="flex items-center gap-3 glass-panel px-2 py-1 rounded-full border-cyan/20">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan/40">
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="hidden sm:block">
            <div className="label-caps text-[8px] opacity-50 leading-none">Status</div>
            <div className="text-[10px] font-bold text-cyan leading-tight uppercase">
              Online
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
