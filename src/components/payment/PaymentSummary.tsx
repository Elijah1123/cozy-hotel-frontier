
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, getPaymentMethodDescription } from "@/utils/paymentUtils";
import { PaymentMethodType } from "./PaymentMethods";
import { Separator } from "@/components/ui/separator";

interface PaymentSummaryProps {
  amount: number;
  paymentMethod: PaymentMethodType;
  transactionId: string;
  onClose: () => void;
}

const PaymentSummary = ({ amount, paymentMethod, transactionId, onClose }: PaymentSummaryProps) => {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <Card className="w-full max-w-md mx-auto mt-8 bg-white border-green-200 shadow-md">
      <CardHeader className="bg-green-50 border-b border-green-200">
        <div className="flex items-center justify-center text-green-600 mb-2">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        <CardTitle className="text-center text-green-700">Payment Successful</CardTitle>
        <CardDescription className="text-center text-green-600">
          Your payment has been processed
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium">{formatCurrency(amount)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium">{getPaymentMethodDescription(paymentMethod)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{currentDate}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID:</span>
            <span className="font-medium text-xs">{transactionId}</span>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <button
          onClick={onClose}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
        >
          Close
        </button>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;
