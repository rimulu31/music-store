import React from "react";
import ProductItem from "../components/ProductItem";

const products = [
  {
    id: 1,
    name: "Computer",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Laptop core i7",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1684127987312-43455fd95925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1626155399627-86488538895d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1632160871990-be30194885aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Gaming Headset",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1593112723196-e841f5c60799?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Gaming Monitor",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Gaming Chair",
    description: "Product description goes here",
    img: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const Products = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-600">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mt-16 text-3xl font-bold ">Products</h1>
        <div className="flex flex-wrap w-[80%] m-auto justify-center  bg-slate-100 my-10 p-5 border-2 border-gray-300 rounded-lg">
          {products.map((product) => (
           <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                img={product.img}
              />
          ))}
        </div>
      </div>
      <footer className=" bg-pink-300 text-center p-4">
        --- Product footer ---
      </footer>
    </div>
  );
};

export default Products;
