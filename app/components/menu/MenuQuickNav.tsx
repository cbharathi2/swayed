"use client";

type NavItem = {
  title: string;
  href: string;
};

type MenuQuickNavProps = {
  items: NavItem[];
};

export default function MenuQuickNav({ items }: MenuQuickNavProps) {
  return (
    <div className="sticky top-16 md:top-20 z-30 px-6 pb-10">
      <div className="max-w-7xl mx-auto bg-black/50 border border-white/10 backdrop-blur-xl rounded-3xl px-4 py-3 shadow-lg">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-amber-500/25 bg-amber-700/15 px-4 py-2 text-xs md:text-sm text-amber-100 hover:bg-amber-700/25 hover:border-amber-400/45 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
