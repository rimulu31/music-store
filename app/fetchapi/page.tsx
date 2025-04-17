"use client";

import React, { useEffect, useState } from "react";

type TGitHub = {
  login: string;
  id: number;
  avatar_url: string;
};

export default function GitHubProfile() {
  const [profileName, setProfileName] = useState("shinebo");
  const [data, setData] = useState<TGitHub | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(`https://api.github.com/users/${profileName}`);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          `Failed to fetch (${res.status}: ${
            errorData.message || res.statusText
          })`
        );
      }

      const data = await res.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
          <p>{error}</p>
        </div>
      )}

      {isLoading && <p className="text-gray-600">Loading...</p>}

      {data && (
        <div className="flex flex-col items-center mb-6">
          {data.avatar_url && (
            <div className="relative w-48 h-48 mb-4">
              <img
                className="w-48 h-48 object-cover rounded-full hover:scale-105 transition-transform"
                src={data.avatar_url}
                alt={`${data.login}'s avatar`}
              />
            </div>
          )}

          <div className="text-center">
            <p className="text-lg font-semibold">Username: {data.login}</p>
            <p className="text-gray-600">User ID: {data.id}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 w-full max-w-sm mb-8">
        <input
          className="border border-gray-300 rounded-md p-2 mt-4"
          placeholder="Enter GitHub Username"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
        />
        <button
          className="border px-2 py-1 rounded bg-blue-500 text-white disabled:bg-blue-300"
          onClick={fetchProfile}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
}