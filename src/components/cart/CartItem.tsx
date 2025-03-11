
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  const { product, quantity } = item;
  const { id, name, imageUrl, price, discountedPrice } = product;

  const currentPrice = discountedPrice || price;
  const itemTotal = currentPrice * quantity;

  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 dark:border-gray-800">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 flex-shrink-0">
        <Link to={`/products/${id}`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <Link to={`/products/${id}`} className="hover:text-leaf-600 transition-colors">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{name}</h3>
            </Link>
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
              {discountedPrice ? (
                <>
                  <span className="font-medium text-gray-900 dark:text-gray-100">${discountedPrice.toFixed(2)}</span>
                  <span className="ml-2 line-through">${price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-medium text-gray-900 dark:text-gray-100">${price.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between mt-2 sm:mt-0">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md"
                onClick={handleDecrease}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="mx-3 w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md"
                onClick={handleIncrease}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center mt-2">
              <span className="font-medium text-gray-900 dark:text-gray-100 mr-4">
                ${itemTotal.toFixed(2)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                onClick={handleRemove}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
