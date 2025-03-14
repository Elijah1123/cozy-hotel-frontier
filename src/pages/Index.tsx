
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to Our POS System</h1>
          <p className="mt-3 text-xl">A complete solution for inventory and sales management</p>
        </div>
        <div className="flex flex-col space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link to="/inventory" className="flex items-center justify-center gap-2">
              <Package className="h-5 w-5" />
              Inventory Management
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            <Link to="/payment" className="flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Payment Processing
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
