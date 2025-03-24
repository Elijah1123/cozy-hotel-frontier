
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PaymentProcessing from "./pages/PaymentProcessing";
import InventoryManagement from "./pages/InventoryManagement";
import RamenCatalog from "./pages/RamenCatalog";
import Flatacuties from "./pages/Flatacuties";
import FlatacutiesAdvanced from "./pages/FlatacutiesAdvanced";

function App() {
  return (
    <Router>
      <nav className="bg-secondary p-4">
        <div className="container mx-auto flex flex-wrap gap-4">
          <Link to="/" className="text-foreground hover:text-primary">Home</Link>
          <Link to="/payment" className="text-foreground hover:text-primary">Payment</Link>
          <Link to="/inventory" className="text-foreground hover:text-primary">Inventory</Link>
          <Link to="/ramen" className="text-foreground hover:text-primary">Ramen</Link>
          <Link to="/flatacuties" className="text-foreground hover:text-primary">Flatacuties</Link>
          <Link to="/flatacuties-advanced" className="text-foreground hover:text-primary">Flatacuties Advanced</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/payment" element={<PaymentProcessing />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/ramen" element={<RamenCatalog />} />
        <Route path="/flatacuties" element={<Flatacuties />} />
        <Route path="/flatacuties-advanced" element={<FlatacutiesAdvanced />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
