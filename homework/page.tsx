"use client";

import React, { useEffect, useState } from "react";

type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const ITEMS_PER_PAGE = 10;

export default function PhotosPage() {
  const [photos, setPhotos] = useState<TPhoto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data: TPhoto[] = await res.json();
        setPhotos(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPhotos = photos.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-black text-cyan-300 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-cyan-400 drop-shadow-[0_0_5px_cyan]">⚡ Cyber Photo Vault ⚡</h1>

      {error && (
        <div className="bg-red-900 text-red-300 border border-red-500 p-4 rounded mb-4 shadow-lg">
          {error}
        </div>
      )}

      {isLoading ? (
        <p className="text-center text-cyan-400">Decrypting photo data...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {currentPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-[#0d0d0d] rounded-lg shadow-lg p-4 border border-cyan-400 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="rounded-md border border-cyan-300 mb-2"
                />
                <div className="text-xs text-center space-y-1 text-cyan-200">
                  <p><strong>ID:</strong> {photo.id}</p>
                  <p><strong>Album:</strong> {photo.albumId}</p>
                  <p className="text-lime-300"><strong>Title:</strong> {photo.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded shadow-md disabled:opacity-30"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ⬅ Prev
            </button>

            <span className="text-lg font-semibold text-purple-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded shadow-md disabled:opacity-30"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}