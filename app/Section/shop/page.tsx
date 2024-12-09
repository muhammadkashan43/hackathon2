import React from "react";
import Image from "next/image";
type pc ={
    title: string,
    price: string,
    imageSrc: string,

}
const ProductCard = ({
  title,
  price,
  imageSrc,
}: pc) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-800">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      title: "Library Stool Chair",
      price: "$00",
      imageSrc: "/Image.png",
    },
    {
      title: "Library Stool Chair",
      price: "$00",
      imageSrc: "/Image(2).png",
    },
    {
      title: "Library Stool Chair",
      price: "$00",
      imageSrc: "/Image(6).png",
    },
    {
      title: "Library Stool Chair",
      price: "$00",
      imageSrc: "/Image(7).png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
          <Image
              src={"/Image.png"}
              alt="Library Stool Chair"
              width={675}
              height={607}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-9">
              Library Stool Chair
            </h2>

            <div className="bg-[#007580] text-white px-4 py-2 rounded-md mb-4">
              $20.00 USD
            </div>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>

            <button className="bg-[#007580] hover:bg-[#007580] text-white font-bold py-2 px-4 rounded-md">
              <svg
                className="w-4 h-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2-.6"
                />
              </svg>
              Add To Cart
            </button>

            <p className="text-gray-500 mt- 4">In stock</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
