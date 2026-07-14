"use client";

import { type ReactNode } from "react";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`glass-panel overflow-hidden rounded-xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
