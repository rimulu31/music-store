"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// Define the type for MusicStore items
type MusicStoreItem = {
  id: number;
  music_name: string;
  price: number;
  is_new: boolean;
  brand: string;
};

// Define the form input types
type MusicStoreFormInput = Omit<MusicStoreItem, "id"> & {
  id?: number;
};

export default function MusicStorePage() {
  // State for storing the list of music items
  const [musicItems, setMusicItems] = useState<MusicStoreItem[]>([]);
  // State for tracking loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // State for tracking error messages
  const [error, setError] = useState<string | null>(null);
  // State to determine if we're in edit mode
  const [editingId, setEditingId] = useState<number | null>(null);
  // State for confirmation dialog
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<MusicStoreFormInput>();

  // Fetch all music items on component mount
  useEffect(() => {
    fetchMusicItems();
  }, []);

  const fetchMusicItems = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/musicstore");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMusicItems(data);
    } catch (err) {
      setError(`Failed to fetch music items: ${err instanceof Error ? err.message : String(err)}`);
      console.error("Error fetching music items:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: MusicStoreFormInput) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;
          
      // Create a copy of the data to modify
      const submitData = {...data};
      
      // If editingId exists, update the item
      if (editingId) {
        response = await fetch(`http://localhost:3000/musicstore/${editingId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });
      } else {
        // For new item, explicitly remove id if it exists
        delete submitData.id;
        
        response = await fetch("http://localhost:3000/musicstore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Refresh the list and reset the form
      await fetchMusicItems();
      reset();
      setEditingId(null);
    } catch (err) {
      setError(`Failed to ${editingId ? "update" : "create"} item: ${err instanceof Error ? err.message : String(err)}`);
      console.error(`Error ${editingId ? "updating" : "creating"} item:`, err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item: MusicStoreItem) => {
    // Set the form values
    setValue("music_name", item.music_name);
    setValue("price", item.price);
    setValue("is_new", item.is_new);
    setValue("brand", item.brand);
    // Set the editing ID
    setEditingId(item.id);
  };

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3000/musicstore/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Remove the item from the local state
      setMusicItems(musicItems.filter(item => item.id !== id));
      setDeleteItemId(null);
    } catch (err) {
      setError(`Failed to delete item: ${err instanceof Error ? err.message : String(err)}`);
      console.error("Error deleting item:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEdit = () => {
    reset();
    setEditingId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Music Store Management</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      {/* Form for creating or updating items */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Music Item" : "Add New Music Item"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="music_name">
                Music Name
              </label>
              <input
                id="music_name"
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.music_name ? "border-red-500" : ""
                }`}
                {...register("music_name", { required: "Music name is required" })}
              />
              {errors.music_name && <p className="text-red-500 text-xs italic">{errors.music_name.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.price ? "border-red-500" : ""
                }`}
                {...register("price", { 
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" }
                })}
              />
              {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                Brand
              </label>
              <input
                id="brand"
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.brand ? "border-red-500" : ""
                }`}
                {...register("brand", { required: "Brand is required" })}
              />
              {errors.brand && <p className="text-red-500 text-xs italic">{errors.brand.message}</p>}
            </div>

            <div className="mb-4 flex items-center">
              <input
                id="is_new"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                {...register("is_new")}
              />
              <label className="ml-2 text-gray-700 text-sm font-bold" htmlFor="is_new">
                New Item
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : editingId ? "Update Item" : "Add Item"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table to display music items */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Music Inventory</h2>
        {isLoading && !musicItems.length ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : musicItems.length === 0 ? (
          <p className="text-center text-gray-600">No music items found</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Music Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {musicItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.music_name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.brand}</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.is_new ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.is_new ? "New" : "Used"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteItemId(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete confirmation dialog */}
      {deleteItemId && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Delete Music Item
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this item? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => handleDelete(deleteItemId)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setDeleteItemId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}