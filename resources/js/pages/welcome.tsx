import DashboardNavbar from '@/components/dashboard-navbar';
import ShopGrid from '@/components/shop-grid';
// neil this is the entry point of the landing page.

export default function App() {
    return (
        <div className="grid grid-rows-1 gap-4">
            <div className="grid">
                <DashboardNavbar />
            </div>
            <div className="grid">
                <ShopGrid />
            </div>
        </div>
    );
}
