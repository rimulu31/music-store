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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      {isLoading ? (
        <p className="text-center text-gray-600">Loading photos...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <div className="text-xs mt-2 text-center space-y-1">
                  <p>
                    <strong>ID:</strong> {photo.id}
                  </p>
                  <p>
                    <strong>Album ID:</strong> {photo.albumId}
                  </p>
                  <p>
                    <strong>Title:</strong> {photo.title}
                  </p>
                </div>{" "}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
