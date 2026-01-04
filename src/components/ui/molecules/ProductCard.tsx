import Image from "next/image";
import { ProductCardProps } from "@/types/product.type";

export const ProductCard = ({
  id,
  title,
  image,
  price,
}: ProductCardProps) => {
  return (
    <section className="bg-base-100 w-96 shadow-sm p-4">
      <div className="card">
        <figure>
          <Image
            src={image}
            className="w-24 h-24 object-contain"
            alt={`${title} image`}
            width={100}
            height={100}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold leading-normal">{title}</h2>
          <p className="text-lg font-bold">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}