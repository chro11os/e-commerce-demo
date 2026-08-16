export default function ShopGrid() {
    return (
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-3 bg-brand-offwhite sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="rounded bg-brand-offblack p-4 text-center text-brand-offwhite hover:text-brand-accent2"
                >
                    Item {i + i}
                </div>
            ))}
        </div>
    );
}
