import React from "react";
import Image from "next/image";

const ProductItem = ({ id, name, description, img }) => {
  return (
    <div
      key={id}
      className="flex flex-col relative border border-indigo-300 w-fit p-5 m-2 bg-neutral-100 rounded-lg"
    >
      <h2 className="text-xl font-bold">
        {id}. {name}:
      </h2>
      <Image
        className="w-64 h-64 object-cover rounded-lg my-3"
        src={img}
        alt={name}
        width={300}
        height={300}
      />
      <p className="w-64">{description}</p>
      <button
        className="border w-32 bg-amber-300 px-2 py-1 rounded-2xl mt-2
          hover:bg-amber-400"
      >
        Buy Now
      </button>
      <span className="absolute bottom-5 right-5 bg-amber-200 border border-amber-200 p-1 rounded-full w-7 h-7 flex items-center justify-center">
        {id}
      </span>
    </div>
  );
};

export default ProductItem;