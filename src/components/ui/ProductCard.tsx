
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/animations/FadeIn';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const {
    id,
    name,
    price,
    discountedPrice,
    shortDescription,
    imageUrl,
    rating,
    reviews,
    bestSeller,
    new: isNew,
  } = product;

  const hasDiscount = discountedPrice !== undefined;
  const discount = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <FadeIn
      delay={index * 100}
      className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Badge */}
      {(bestSeller || isNew) && (
        <div className="absolute top-3 left-3 z-10">
          {bestSeller && (
            <span className="inline-block bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full mr-2">
              Best Seller
            </span>
          )}
          {isNew && (
            <span className="inline-block bg-sky-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      )}

      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block bg-leaf-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        </div>
      )}

      {/* Image */}
      <Link to={`/products/${id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
          {shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  'mr-0.5',
                  i < Math.floor(rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300 dark:text-gray-600'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100 mr-2">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full hover:bg-leaf-50 hover:text-leaf-600 dark:hover:bg-gray-800"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </FadeIn>
  );
};

export default ProductCard;
