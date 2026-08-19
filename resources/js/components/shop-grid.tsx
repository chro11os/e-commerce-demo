import ProductCard from '@/components/product-card';
export default function ShopGrid() {
    return (
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-3 bg-brand-offwhite sm:grid-cols-3 lg:grid-cols-5 p-7">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="rounded bg-    <ul></ul>
        </nav>brand-offblack p-4 text-center text-brand-offwhite hover:text-brand-accent2"
                >
                    <ProductCard />
                </div>
            ))}
        </div>
    );
}
