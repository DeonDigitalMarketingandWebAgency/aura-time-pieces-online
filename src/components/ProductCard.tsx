
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <Link to={`/products/${product.collection}/${product.id}`}>
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {product.isNew && (
              <div className="absolute top-2 right-2 bg-aura-gold text-white text-xs px-2 py-1 rounded">NEW</div>
            )}
            {product.isBestseller && (
              <div className="absolute top-2 left-2 bg-aura-navy text-white text-xs px-2 py-1 rounded">BESTSELLER</div>
            )}
            {product.isLimitedEdition && (
              <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 text-center">
                LIMITED EDITION
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-serif font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection
            </p>
            <div className="flex justify-between items-center">
              <p className="font-medium text-aura-navy">${product.price.toLocaleString()}</p>
              <span className="text-xs text-aura-gold hover:underline">View Details</span>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
