export default function DashboardNavbar () {
    const navItems = ['home', 'logout', 'login', 'cart', 'profile' ];

    return (
        <nav className="p-4 bg-brand-offwhite">
            <ul className="flex flex-row items-center gap-4">
                {navItems.map((item) => (
                    <li key={item}>
                        <a
                            href={`/${item}`}
                            className="capitalize text-brand-offblack hover:text-brand-accent2"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
