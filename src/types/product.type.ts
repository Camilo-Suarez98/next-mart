export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface ProductCardProps extends Partial<ProductProps> {
  id?: number;
  title: string;
  price: number;
  image: string;
  rating?: {
    rate: number;
    count: number;
  }
}