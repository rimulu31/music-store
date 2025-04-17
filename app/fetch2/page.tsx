import React from "react";

type TPost = {
  title: string;
  author: string;
};

export default async function Fetch2() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log("Posts: ", posts);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl px-6 py-10">
        <h1 className="text-4xl font-semibold text-center mb-8">Blog Posts</h1>
        <ul className="space-y-4">
          {posts.map((post: TPost, index: number) => {
            if (index > 5) return null;

            return (
              <li
                className="bg-white text-black rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                key={index}
              >
                <h2 className="text-2xl font-bold">{index + 1}. {post.title}</h2>
                <p className="text-lg mt-2">Author: {post.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
