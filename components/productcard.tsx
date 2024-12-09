// components/ProductCard.js
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  productCount: number;
  imageUrl: string;
  href: string;
}

export default function ProductCard({
  title,
  productCount,
  imageUrl,
  href,
}: ProductCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-[8px] bg-transparent shadow-lg">
      <div className="aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          className="object-fit w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 rounded-[8px] to-black/40 p-4">
        <div className="space-y-1 text-white">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-300">{productCount.toLocaleString()} Products</p>
        </div>
      </div>
    </Link>
  );
}