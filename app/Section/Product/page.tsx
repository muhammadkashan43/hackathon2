"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";

interface Product {
  id: number;
  name: string;
  image: string;
  badge?: "new" | "sale" | null;
  price:number;
}

const products: Product[] = [
  { id: 1, name: "Classic White Chair", image: "/Image.png", badge: "new" , price: 20  },
  { id: 2, name: "Modern Black Stool", image: "/Image(1).png", price:25 },
  {
    id: 3,
    name: "Vintage Wooden Chair",
    image: "/Image(2).png",
    badge: "sale",
    price:20
  },
  { id: 4, name: "Ergonomic Office Chair", image: "/Image(3).png", price:35},
  { id: 5, name: "Classic White Chair", image: "/Image(5).png", badge: "new" , price: 20  },
  { id: 6, name: "Modern Black Stool", image: "/Image(6).png", price:25 },
  {
    id: 7,
    name: "Vintage Wooden Chair",
    image: "/Image(7).png",
    price:20
  },
  { id: 8, name: "Ergonomic Office Chair", image: "/Image(8).png",badge: "new", price:35},
  { id: 9, name: "Classic White Chair", image: "/Image(2).png", badge: "new" , price: 20  },
  { id: 10, name: "Modern Black Stool", image: "/Image(3).png", price:25 },
  {
    id: 11,
    name: "Vintage Wooden Chair",
    image: "/Image(1).png",
    badge: "sale",
    price:20
  },
  { id: 12, name: "Ergonomic Office Chair", image: "/Image.png", price:35},

];

export default function Product() {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  const toggleView = () => setShowAll(!showAll);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center max-w-7xl mx-auto">
        {displayedProducts.map((product) => (
          <div key={product.id} className="relative group">
            <div className="w-full aspect-square rounded-lg flex items-center justify-center p-4">
              {product.badge && (
                <Badge
                  className={`absolute top-6 left-6 text-white rounded-[5px] ${product.badge === "new" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-red-500 hover:bg-red-600"}`}
                >
                  {product.badge === "new" ? "New" : "Sale"}
                </Badge>
              )}
              <div className="relative -z-10 w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
            <h3 className=" ml-5 text-sm font-medium text-[#272343] transition-colors hover:transition-colors  hover:text-[#029FAE]">
              {product.name}
            </h3>
            <h4 className="ml-5 text-lg font-bold">
                ${product.price}{product.badge === "sale" && <span className={"line-through ml-1 text-gray-400"}>50</span>}
            </h4>
            </div>
            <div className="flex">
              <Image src={"/Group(1).svg"} alt="cart" height={20} width={20} className="object-contain rounded-lg mr-7"/>
            </div>
            </div>
          </div>
        ))}
      </div>
      {products.length > 5 && (
        <div className="mt-8 text-center">
          <Button onClick={toggleView} variant="outline">
            {showAll ? "View Less" : "View All"}
          </Button>
        </div>
      )}
      <Newsletter/>
    </div>
  );
}
