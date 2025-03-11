
export type ProductCategory = 'urea' | 'potash' | 'dap' | 'garden-medicines';

export type ProductType = 'organic' | 'synthetic' | 'hybrid';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  discountedPrice?: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  quantity: number;
  unit: string;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
  rating: number;
  reviews: number;
  specifications: {
    [key: string]: string;
  };
  benefits: string[];
  usage: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: ProductCategory;
  description: string;
  imageUrl: string;
}
