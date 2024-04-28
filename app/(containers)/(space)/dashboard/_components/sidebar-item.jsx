"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({ Icon, label, href }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-indigo-700 bg-indigo-200/20 hover:bg-indigo-200/20 hover:text-indigo-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-indigo-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-indigo-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};
