
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product.collection}/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-serif font-medium">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection
          </p>
          <p className="font-medium text-aura-navy">${product.price.toLocaleString()}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
