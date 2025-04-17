"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Buyer = {
  buyerID: number;
  buyerName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function BuyersPage() {
  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBuyers = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:3000/buyer");

        if (!res.ok) {
          throw new Error(`Error fetching buyers (${res.status})`);
        }

        const data: Buyer[] = await res.json();
        setBuyers(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBuyers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Buyer List</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading buyers...</p>
      ) : buyers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Photo</th>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer) => (
                <tr key={buyer.buyerID} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">
                    {buyer.profilePhoto ? (
                      <Image
                        src={buyer.profilePhoto}
                        alt={buyer.buyerName}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm text-white">
                        ?
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2">{buyer.buyerID}</td>
                  <td className="px-4 py-2">{buyer.buyerName}</td>
                  <td className="px-4 py-2">{buyer.email}</td>
                  <td className="px-4 py-2">{buyer.phoneNumber}</td>
                  <td className="px-4 py-2">
                    {new Date(buyer.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No buyers found.</p>
      )}
    </div>
  );
}