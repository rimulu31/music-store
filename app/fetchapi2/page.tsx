"use client";

import React, { useEffect, useState } from "react";

export default function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/blog");

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          `Failed to fetch blog posts (${res.status}: ${
            errorData.message || res.statusText
          })`
        );
      }

      const data = await res.json();
      setBlogPosts(data);
    } catch (error: any) {
      setError(error.message);
      setBlogPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
          <p>{error}</p>
        </div>
      )}

      {isLoading && <p className="text-gray-600">Loading...</p>}

      <div className="w-full">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col p-4 bg-white rounded-lg shadow-md mt-4"
            >
              <h3 className="text-lg font-semibold">{post.id}</h3>
              <p className="text-gray-600 mt-2">{post.title}</p>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <p className="text-gray-600 mt-2">Author : {post.author}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts found</p>
        )}
      </div>

      <button
        className="border px-2 py-1 rounded bg-green-500 text-white mt-6 disabled:bg-green-300"
        onClick={fetchBlogPosts}
        disabled={isLoading}
      >
        Refresh Blog Posts
      </button>
    </div>
  );
}