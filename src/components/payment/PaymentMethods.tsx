
import { useState } from "react";
import { CreditCard, Wallet, Check, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type PaymentMethodType = "credit-card" | "cash" | "store-credit" | "invoice";

interface PaymentMethodsProps {
  onSelectMethod: (method: PaymentMethodType) => void;
  selectedMethod: PaymentMethodType | null;
}

const PaymentMethods = ({ onSelectMethod, selectedMethod }: PaymentMethodsProps) => {
  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      description: "Pay with Visa, Mastercard, or American Express",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: "cash",
      name: "Cash",
      description: "Pay with cash at checkout",
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      id: "store-credit",
      name: "Store Credit",
      description: "Use available store credit",
      icon: <Check className="h-5 w-5" />,
    },
    {
      id: "invoice",
      name: "Invoice",
      description: "Generate an invoice for later payment",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Select how you would like to pay</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center space-x-4 rounded-md border p-4 transition-colors hover:bg-muted/50 cursor-pointer ${
              selectedMethod === method.id ? "border-primary bg-muted/25" : ""
            }`}
            onClick={() => onSelectMethod(method.id as PaymentMethodType)}
          >
            <div className={`p-2 rounded-full ${selectedMethod === method.id ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
              {method.icon}
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium">{method.name}</p>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
