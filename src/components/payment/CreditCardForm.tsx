
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

interface CreditCardFormProps {
  onFormChange: (isValid: boolean) => void;
}

const CreditCardForm = ({ onFormChange }: CreditCardFormProps) => {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const validateForm = (data: typeof cardData) => {
    const newErrors = {
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
    };
    
    let isValid = true;

    // Simple validation
    if (!data.cardNumber.trim() || data.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Please enter a valid card number";
      isValid = false;
    }

    if (!data.cardholderName.trim()) {
      newErrors.cardholderName = "Please enter the cardholder name";
      isValid = false;
    }

    if (!data.expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)";
      isValid = false;
    }

    if (!data.cvv.trim() || !/^\d{3,4}$/.test(data.cvv)) {
      newErrors.cvv = "Please enter a valid CVV";
      isValid = false;
    }

    setErrors(newErrors);
    onFormChange(isValid);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    // Format card number with spaces every 4 digits
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
    }
    
    // Format expiry date as MM/YY
    if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1/$2");
    }
    
    setCardData({ ...cardData, [name]: formattedValue });
    
    setTimeout(() => {
      validateForm({ ...cardData, [name]: formattedValue });
    }, 500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Credit Card Details
        </CardTitle>
        <CardDescription>Enter your card information to process payment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            value={cardData.cardNumber}
            onChange={handleInputChange}
            maxLength={19}
          />
          {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cardholderName">Cardholder Name</Label>
          <Input
            id="cardholderName"
            name="cardholderName"
            placeholder="John Doe"
            value={cardData.cardholderName}
            onChange={handleInputChange}
          />
          {errors.cardholderName && <p className="text-sm text-destructive">{errors.cardholderName}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={cardData.expiryDate}
              onChange={handleInputChange}
              maxLength={5}
            />
            {errors.expiryDate && <p className="text-sm text-destructive">{errors.expiryDate}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              name="cvv"
              type="password"
              placeholder="123"
              value={cardData.cvv}
              onChange={handleInputChange}
              maxLength={4}
            />
            {errors.cvv && <p className="text-sm text-destructive">{errors.cvv}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditCardForm;
