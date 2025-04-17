import React from "react";
import Image from "next/image";
import { Bungee_Tint } from "next/font/google";
import Link from "next/link";

const bungee = Bungee_Tint({
  subsets: ["latin"],
  weight: "400",
});

const MyApp = () => {
  return (
    <>
      <div
        className={` w-[80%] border border-blue-300 m-auto mt-10 p-6 rounded flex flex-col`}
      >
        <h1 className={`${bungee.className} text-2xl font-bold m-2 p-2`}>
          Hello World!!
        </h1>
        <Link
          href="/products"
          className="border border-amber-300 w-fit mb-4 p-2 rounded bg-cyan-300 text-gray-900"
        >
          Go to Products
        </Link>
        <Link
          href="/foo"
          className="border border-amber-300 w-fit mb-4 p-2 rounded bg-red-300 text-gray-900"
        >
          Go to Foo
        </Link>
        <div>
          <Image
            className="mb-4"
            src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8fDA%3D"
            width={150}
            height={150}
            alt="Picture of the author"
          />
          <Image
            className="mb-4"
            src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <p
          className={`${bungee.className} border border-amber-300 w-128 mb-4 p-2 rounded bg-cyan-300 text-gray-900`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo
          debitis magni eius repudiandae veniam, eaque est, velit, nulla ducimus
          molestias? Laudantium sunt at itaque!
        </p>
        <p className="border border-amber-300 w-128 mb-4 p-2 rounded bg-indigo-300 text-gray-900">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo
          debitis magni eius repudiandae veniam, eaque est, velit, nulla ducimus
          molestias? Laudantium sunt at itaque!
        </p>
        <p className="border border-amber-300 w-128 mb-4 p-2 rounded bg-teal-300 text-gray-900">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo
          debitis magni eius repudiandae veniam, eaque est, velit, nulla ducimus
          molestias? Laudantium sunt at itaque!
        </p>
      </div>
      <div className="relative w-106 py-24 px-12 mx-auto bg-green-500 text-center mt-10">
        <h3 className="absolute -top-5 left-1/2 -translate-x-1/2 border border-black px-5 py-2.5 bg-blue-200 inline-block text-center rounded">
          Banner
        </h3>
        <button className="absolute top-0 right-0 px-2 py-0.5 bg-gray-300">x</button>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute -bottom-12 -right-12 w-28 h-24 rounded-3xl bg-white py-1 px-4 z-10"></div>
        {/* <Image
          className="absolute w-24 h-24 object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          src="https://0.soompi.io/wp-content/uploads/2023/06/01052301/Giselle.jpeg"
          alt="giselle"
          width={150}
          height={150}
        /> */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white text-center border-3 border-dotted border-white p-2.5 w-1/2">
          This is Tailwind Position
        </span>
      </div>
    </>
  );
};

export default MyApp;
