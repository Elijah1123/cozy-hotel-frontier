
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PaymentMethods, { PaymentMethodType } from "@/components/payment/PaymentMethods";
import CreditCardForm from "@/components/payment/CreditCardForm";
import { processPayment, formatCurrency } from "@/utils/paymentUtils";
import PaymentSummary from "@/components/payment/PaymentSummary";
import { Loader2 } from "lucide-react";

const PaymentProcessing = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType | null>(null);
  const [amount] = useState(199.99); // Example amount
  const [isCardFormValid, setIsCardFormValid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const handlePaymentMethodSelect = async (method: PaymentMethodType) => {
    setPaymentMethod(method);
    
    // For all payment methods except credit card, process immediately
    if (method !== "credit-card") {
      await handleProcessPayment();
    }
  };

  const handleCardFormChange = (isValid: boolean) => {
    setIsCardFormValid(isValid);
  };

  const handleProcessPayment = async () => {
    if (!paymentMethod) return;
    
    // Don't process credit card payment if form is invalid
    if (paymentMethod === "credit-card" && !isCardFormValid) return;
    
    setIsProcessing(true);
    
    try {
      const result = await processPayment(amount, paymentMethod);
      
      if (result.success) {
        setTransactionId(result.transactionId);
        setPaymentComplete(true);
      }
    } catch (error) {
      console.error("Payment processing error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = () => {
    setPaymentMethod(null);
    setPaymentComplete(false);
    setTransactionId("");
    setIsCardFormValid(false);
  };

  if (paymentComplete) {
    return (
      <div className="container mx-auto py-10 px-4">
        <PaymentSummary 
          amount={amount}
          paymentMethod={paymentMethod as PaymentMethodType}
          transactionId={transactionId}
          onClose={resetPayment}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <PaymentMethods 
              onSelectMethod={handlePaymentMethodSelect} 
              selectedMethod={paymentMethod}
            />
            
            {paymentMethod === "credit-card" && (
              <>
                <CreditCardForm onFormChange={handleCardFormChange} />
                
                <Button 
                  onClick={handleProcessPayment} 
                  disabled={!isCardFormValid || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${formatCurrency(amount)}`
                  )}
                </Button>
              </>
            )}
            
            {paymentMethod && paymentMethod !== "credit-card" && (
              <div className="p-4 flex items-center justify-center">
                {isProcessing ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                    <p>Processing your payment...</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your order details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(amount * 0.9)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatCurrency(amount * 0.1)}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>{formatCurrency(amount)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
