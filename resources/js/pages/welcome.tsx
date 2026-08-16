import DashboardNavbar from '@/components/dashboard-navbar';
import ShopGrid from '@/components/shop-grid';
// neil this is the entry point of the landing page.

export default function App() {
    return (
        <div className="grid grid-cols-2">
            <div className="grid">
                <DashboardNavbar />
            </div>
            <div className="grid">
                <ShopGrid />
            </div>
        </div>
    );
}
