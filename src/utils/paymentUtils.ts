
import { toast } from "sonner";
import { PaymentMethodType } from "@/components/payment/PaymentMethods";

// Simulate payment processing API call
export const processPayment = async (
  amount: number, 
  paymentMethod: PaymentMethodType,
  paymentDetails?: any
): Promise<{ success: boolean; transactionId: string; message: string }> => {
  // In a real application, this would be an API call to a payment gateway
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate success rate (95% success)
      const isSuccessful = Math.random() > 0.05;
      
      if (isSuccessful) {
        resolve({
          success: true,
          transactionId: Math.random().toString(36).substring(2, 16).toUpperCase(),
          message: "Payment processed successfully"
        });
      } else {
        let errorMessage = "Payment processing failed";
        
        // Add specific error messages based on payment method
        if (paymentMethod === "credit-card") {
          errorMessage = "Credit card was declined";
        } else if (paymentMethod === "store-credit") {
          errorMessage = "Insufficient store credit";
        }
        
        resolve({
          success: false,
          transactionId: "",
          message: errorMessage
        });
      }
    }, 2000); // 2 second delay to simulate processing
  });
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
