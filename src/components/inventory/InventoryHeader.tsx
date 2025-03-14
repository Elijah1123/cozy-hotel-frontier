
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Package, ShoppingCart } from "lucide-react";

const InventoryHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">Inventory System</h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Button variant="secondary" asChild size="sm">
                <Link to="/payment" className="flex items-center gap-1">
                  <ShoppingCart className="h-4 w-4" /> Payment
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="secondary" asChild size="sm">
                <Link to="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" /> Home
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InventoryHeader;
