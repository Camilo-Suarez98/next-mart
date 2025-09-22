import { useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  return { products, loading, error, getProducts };
}