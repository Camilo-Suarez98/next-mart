import Image from "next/image";
import { ProductCardProps } from "@/types/product.type";
import { Star } from "@deemlol/next-icons";

export const ProductCard = ({
  id,
  title,
  image,
  price,
  rating,
}: ProductCardProps) => {
  return (
    <section className="bg-base-100 w-96 shadow-md rounded-2xl hover:shadow-lg transition-all">
      <div className="flex flex-col">
        <figure className="flex justify-center items-center p-4 bg-[#0000000a]">
          <Image
            src={image}
            className="object-contain w-48 h-48"
            alt={`${title} image`}
            height={250}
            width={250}
          />
        </figure>
        <div className="p-4">
          <h2 className="text-base h-10 leading-tight mb-3">{title}</h2>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star size={12} color="blue" />
              <span>{rating?.rate}</span>
            </div>
            <span>({rating?.count})</span>
          </div>
          <p className="text-xl font-bold">${price}</p>
          <div className="justify-end">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}