import { useState } from 'react';
export default function DashboardSidebar () {
    const [active, setActive] = useState('Home');
    const items= ['Home', 'Cart', 'Account'];

    return (
        <aside className="flex h-screen w-64 flex-col gap-2 bg-brand-offwhite p-4 text-brand-offblack">
            <div className="px-3 text-xl font-bold">Logo</div>
            <nav className="flex flex-col gap-1">
                {items.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`rounded px-3 py-2 text-left transition ${
                            active === item
                                ? 'bg-neutral-800 font-medium text-white'
                                : 'text-brand-offblack hover:bg-brand-offblack hover:text-brand-accent2'
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </aside>
    );
}
