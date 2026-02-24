import { useState, useEffect } from 'react';

type UserConnectionStatus = 'online' | 'offline';

interface UserStatusProps {
  isOnline: boolean; // parent component determines connection
}

export default function UserConnectionStatus({ isOnline }: UserStatusProps) {
  const status: UserConnectionStatus = isOnline ? 'online' : 'offline';

  const color = status === 'online' ? 'lime' : '#ff4444';
  const text = status === 'online' ? 'Online' : 'Offline';

  return (
    <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 glass-panel rounded-full border-white/10 z-50">
      <div
        className="w-3 h-3 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <span
        className="text-[9px] font-bold uppercase tracking-widest"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
}
