
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { ShoppingBag, CreditCard, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import PaymentForm from '@/components/payment/PaymentForm';

const Cart = () => {
  const { toast } = useToast();
  // Placeholder for cart items - would be replaced with actual state management
  const cartItems = [];
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'payment' | 'confirmation'>('cart');
  
  const handleRemoveItem = (id: string) => {
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
    console.log(`Removed item with id: ${id}`);
  };
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    console.log(`Updated quantity for item with id: ${id} to ${quantity}`);
  };
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    setCheckoutStep('payment');
    toast({
      title: "Proceeding to Payment",
      description: "Please complete your payment details.",
    });
  };

  const handlePaymentSuccess = () => {
    setCheckoutStep('confirmation');
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully!",
    });
  };

  const resetCheckout = () => {
    setCheckoutStep('cart');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <h1 className="text-3xl font-bold mb-8">
          {checkoutStep === 'cart' && 'Your Cart'}
          {checkoutStep === 'payment' && 'Payment Details'}
          {checkoutStep === 'confirmation' && 'Order Confirmation'}
        </h1>
        
        {checkoutStep === 'cart' && (
          <>
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    {cartItems.map((item) => (
                      <CartItem 
                        key={item.product.id}
                        item={item}
                        onRemove={handleRemoveItem}
                        onUpdateQuantity={handleUpdateQuantity}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$0.00</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-leaf-600 hover:bg-leaf-700"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="flex justify-center mb-6">
                  <ShoppingBag className="h-20 w-20 text-gray-300 dark:text-gray-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Link to="/products">
                  <Button className="bg-leaf-600 hover:bg-leaf-700">
                    Browse Products
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}

        {checkoutStep === 'payment' && (
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={resetCheckout}
            >
              Back to Cart
            </Button>
            <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
          </div>
        )}

        {checkoutStep === 'confirmation' && (
          <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-leaf-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your order has been placed successfully. We've sent you an email with all the details.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-md mb-6">
              <h3 className="text-lg font-medium mb-3">Order #23589</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Estimated delivery: <span className="font-medium">3-5 business days</span>
              </p>
            </div>
            <Link to="/products">
              <Button className="bg-leaf-600 hover:bg-leaf-700">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
