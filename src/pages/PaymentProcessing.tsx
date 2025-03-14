
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import InventoryHeader from "@/components/inventory/InventoryHeader";
import PaymentMethods, { PaymentMethodType } from "@/components/payment/PaymentMethods";
import CreditCardForm from "@/components/payment/CreditCardForm";
import { Product } from "@/pages/InventoryManagement";
import { CheckCircle, ArrowLeft, ShoppingCart, DollarSign } from "lucide-react";
import { toast } from "sonner";

interface PaymentProps {
  products?: Product[];
}

const PaymentProcessing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType | null>(null);
  const [isCreditCardValid, setIsCreditCardValid] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [orderTotal, setOrderTotal] = useState(0);

  // Simulate a cart with some products
  useEffect(() => {
    // In a real application, this would come from state management or a cart service
    // For this demo, we're creating a simulated cart
    const demoCart = [
      {
        id: "1",
        name: "Office Chair",
        category: "Furniture",
        price: 199.99,
        quantity: 1,
        sku: "FURN-001",
        lastUpdated: "2023-06-10"
      },
      {
        id: "3",
        name: "Wireless Keyboard",
        category: "Electronics",
        price: 59.99,
        quantity: 2,
        sku: "ELEC-003",
        lastUpdated: "2023-06-15"
      }
    ];
    
    setCart(demoCart);
    
    // Calculate the total
    const total = demoCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setOrderTotal(total);
  }, []);

  const handleMethodSelect = (method: PaymentMethodType) => {
    setSelectedMethod(method);
  };

  const handleCreditCardFormChange = (isValid: boolean) => {
    setIsCreditCardValid(isValid);
  };

  const handleProcessPayment = () => {
    // Validate based on payment method
    if (selectedMethod === "credit-card" && !isCreditCardValid) {
      toast.error("Please complete the credit card form correctly.");
      return;
    }

    // Process payment (in a real application, this would call a payment API)
    setIsPaymentComplete(true);
    toast.success("Payment processed successfully!");

    // In a real application, you would update inventory quantities here
  };

  const handleBackToInventory = () => {
    navigate("/inventory");
  };

  const handleNewTransaction = () => {
    setSelectedMethod(null);
    setIsPaymentComplete(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <InventoryHeader />
      
      <main className="container mx-auto px-4 py-6">
        <Button 
          variant="outline" 
          className="mb-4"
          onClick={handleBackToInventory}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Inventory
        </Button>

        {isPaymentComplete ? (
          <Card className="max-w-xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle>Payment Complete</CardTitle>
              <CardDescription>Thank you for your purchase!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4 bg-muted/25">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <p>A receipt has been sent to your email.</p>
                <p>Order ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNewTransaction} className="w-full">
                Start New Transaction
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                      </div>
                      <div className="text-right">
                        <p>${item.price.toFixed(2)} x {item.quantity}</p>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-2 font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
              
              <PaymentMethods 
                onSelectMethod={handleMethodSelect}
                selectedMethod={selectedMethod}
              />
            </div>
            
            <div>
              {selectedMethod === "credit-card" && (
                <CreditCardForm onFormChange={handleCreditCardFormChange} />
              )}
              
              {selectedMethod === "cash" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Cash Payment
                    </CardTitle>
                    <CardDescription>Enter the amount received</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/25 rounded-md text-center">
                      <p className="text-lg">Amount due: <span className="font-bold">${orderTotal.toFixed(2)}</span></p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The cashier will collect the cash payment and provide change if necessary.
                    </p>
                  </CardContent>
                </Card>
              )}
              
              {selectedMethod === "store-credit" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Store Credit</CardTitle>
                    <CardDescription>Apply available store credit</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/25 rounded-md text-center">
                      <p className="text-sm text-muted-foreground mb-1">Available Store Credit</p>
                      <p className="text-2xl font-bold">$100.00</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your store credit will be applied to this purchase.
                    </p>
                  </CardContent>
                </Card>
              )}
              
              {selectedMethod === "invoice" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Invoice Payment</CardTitle>
                    <CardDescription>Generate an invoice for later payment</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      An invoice will be generated for this transaction. Payment is due within 30 days.
                    </p>
                    <div className="p-4 bg-muted/25 rounded-md">
                      <p className="font-medium">Invoice Details:</p>
                      <p className="text-sm">Invoice #: INV-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                      <p className="text-sm">Due Date: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="mt-6">
                <Button 
                  className="w-full"
                  size="lg"
                  disabled={!selectedMethod || (selectedMethod === "credit-card" && !isCreditCardValid)}
                  onClick={handleProcessPayment}
                >
                  Process Payment
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PaymentProcessing;
