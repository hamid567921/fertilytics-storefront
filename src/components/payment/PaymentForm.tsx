
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Calendar, 
  Lock, 
  User, 
  MapPin, 
  Phone
} from 'lucide-react';

interface PaymentFormProps {
  onPaymentSuccess: () => void;
}

const paymentSchema = z.object({
  cardName: z.string().min(3, "Cardholder name is required"),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  phone: z.string().min(10, "Phone number is required")
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

const PaymentForm = ({ onPaymentSuccess }: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'paypal'>('credit');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: ''
    }
  });

  const onSubmit = (data: PaymentFormValues) => {
    setIsProcessing(true);
    console.log('Payment data:', data);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 1500);
  };

  const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
  };

  const formatExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    e.target.value = value;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="flex space-x-4 mb-6">
          <button
            type="button"
            onClick={() => setPaymentMethod('credit')}
            className={`flex items-center p-4 border rounded-lg w-full ${
              paymentMethod === 'credit'
                ? 'border-leaf-600 bg-leaf-50 dark:bg-leaf-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <CreditCard className={`mr-3 ${paymentMethod === 'credit' ? 'text-leaf-600' : ''}`} />
            <span className="font-medium">Credit Card</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`flex items-center p-4 border rounded-lg w-full ${
              paymentMethod === 'paypal'
                ? 'border-leaf-600 bg-leaf-50 dark:bg-leaf-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className={`mr-3 font-bold text-xl ${paymentMethod === 'paypal' ? 'text-leaf-600' : ''}`}>P</div>
            <span className="font-medium">PayPal</span>
          </button>
        </div>
      </div>

      {paymentMethod === 'credit' ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="cardName" className="block text-sm font-medium mb-2">
                Cardholder Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="cardName"
                  {...register('cardName')}
                  placeholder="John Doe"
                  className="pl-10"
                />
              </div>
              {errors.cardName && (
                <p className="mt-1 text-sm text-red-500">{errors.cardName.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="cardNumber"
                  {...register('cardNumber')}
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                  onChange={formatCardNumber}
                  className="pl-10"
                />
              </div>
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.cardNumber.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="expiry"
                  {...register('expiry')}
                  placeholder="MM/YY"
                  maxLength={5}
                  onChange={formatExpiry}
                  className="pl-10"
                />
              </div>
              {errors.expiry && (
                <p className="mt-1 text-sm text-red-500">{errors.expiry.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                CVV
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="cvv"
                  {...register('cvv')}
                  placeholder="123"
                  maxLength={4}
                  className="pl-10"
                />
              </div>
              {errors.cvv && (
                <p className="mt-1 text-sm text-red-500">{errors.cvv.message}</p>
              )}
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium mb-2">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="address"
                  {...register('address')}
                  placeholder="123 Main St"
                  className="pl-10"
                />
              </div>
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">
                City
              </label>
              <Input
                id="city"
                {...register('city')}
                placeholder="New York"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-2">
                State
              </label>
              <Input
                id="state"
                {...register('state')}
                placeholder="NY"
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                Zip Code
              </label>
              <Input
                id="zipCode"
                {...register('zipCode')}
                placeholder="10001"
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="(123) 456-7890"
                  className="pl-10"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-400">Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-leaf-600 hover:bg-leaf-700"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      ) : (
        <div className="text-center py-8">
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Click the button below to complete your payment with PayPal.
          </p>
          <Button
            onClick={() => {
              setIsProcessing(true);
              setTimeout(() => {
                setIsProcessing(false);
                onPaymentSuccess();
              }, 1500);
            }}
            className="bg-blue-500 hover:bg-blue-600"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay with PayPal"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
