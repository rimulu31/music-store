"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Album = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function AlbumAPI() {
  const [records, setRecords] = useState<Album[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
        );
        const data: Album[] = await res.json();
        setRecords(data);
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      }
    };

    fetchAlbums();
  }, [page]);

  if (records.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-lg">
        Loading the vibes...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
          🎵 Photo Album Gallery
        </h1>
        <p className="text-center mb-10 text-lg text-gray-300">
          A collection of randomly generated vibes — explore and enjoy.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {records.map((item) => (
            <div
              key={item.id}
              className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="p-4 space-y-4">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={item.thumbnailUrl}
                    alt={`Thumbnail for ${item.title}`}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>

                <div className="text-sm font-medium">
                  <p className="text-indigo-600">Album #{item.albumId}</p>
                  <p>ID: {item.id}</p>
                  <p className="text-gray-700 text-xs mt-1 line-clamp-2">
                    {item.title}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    View Full Image
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
            disabled={page === 1}
            className={`px-4 py-2 rounded font-semibold ${
              page === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            ← Previous
          </button>

          <span className="text-lg font-bold">Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold"
          >
            Next →
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link href="/musics">
            <button className="px-5 py-2 rounded bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-transform font-semibold">
              👈 Back to Music Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}