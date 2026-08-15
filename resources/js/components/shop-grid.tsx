export default function ShopGrid() {
    return (
        <div className="bg-brand-offwhite grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Array.from ({  length: 20 }).map((_,i)=>(
                <div key={i} className="bg-brand-offblack p-4 rounded text-center hover:text-brand-accent2">
                    Item {i + i}
                </div>
            ))}
        </div>
    );
}
