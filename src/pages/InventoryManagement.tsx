
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import ProductForm from "@/components/inventory/ProductForm";
import InventoryHeader from "@/components/inventory/InventoryHeader";
import { Package, Search, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  sku: string;
  lastUpdated: string;
};

const InventoryManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Office Chair",
      category: "Furniture",
      price: 199.99,
      quantity: 15,
      sku: "FURN-001",
      lastUpdated: "2023-06-10"
    },
    {
      id: "2",
      name: "Desk Lamp",
      category: "Lighting",
      price: 39.99,
      quantity: 30,
      sku: "LIGHT-002",
      lastUpdated: "2023-06-12"
    },
    {
      id: "3",
      name: "Wireless Keyboard",
      category: "Electronics",
      price: 59.99,
      quantity: 25,
      sku: "ELEC-003",
      lastUpdated: "2023-06-15"
    },
    {
      id: "4",
      name: "Notebook Set",
      category: "Stationery",
      price: 12.99,
      quantity: 100,
      sku: "STAT-004",
      lastUpdated: "2023-06-20"
    }
  ]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (product: Omit<Product, "id" | "lastUpdated">) => {
    const newProduct = {
      ...product,
      id: Math.random().toString(36).substring(2, 9),
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    setProducts([...products, newProduct]);
    setShowAddForm(false);
    toast.success("Product added successfully!");
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? 
        {...updatedProduct, lastUpdated: new Date().toISOString().split('T')[0]} : 
        product
    ));
    setEditingProduct(null);
    toast.success("Product updated successfully!");
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    toast.success("Product deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <InventoryHeader />
      
      <main className="container mx-auto px-4 py-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Package className="h-6 w-6" />
              Inventory Management
            </CardTitle>
            <CardDescription>
              Manage your product inventory, track stock levels, and update product information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={() => setShowAddForm(true)} className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableCaption>A list of your inventory products.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <span className={`${product.quantity <= 5 ? 'text-red-500 font-medium' : ''}`}>
                            {product.quantity}
                          </span>
                        </TableCell>
                        <TableCell>{product.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => setEditingProduct(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                        No products found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {(showAddForm || editingProduct) && (
          <ProductForm 
            onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
            onCancel={() => {
              setShowAddForm(false);
              setEditingProduct(null);
            }}
            product={editingProduct}
          />
        )}
      </main>
    </div>
  );
};

export default InventoryManagement;
