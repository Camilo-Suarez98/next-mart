'use client';

import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import { ProductCard } from "@/components/ui/molecules/ProductCard";
import { ProductCardProps } from "@/types/product.type";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="font-sans flex items-center justify-center h-full p-8 pb-10 sm:p-4">
      <main className="flex flex-wrap justify-center items-center gap-6 sm:items-start">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </main>
    </div>
  );
}
