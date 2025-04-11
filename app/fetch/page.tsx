'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FetchAPI() {
    const [name, setName] = useState('wwarodom')
    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(null)

    const fetchAPI = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/${name}`)
            if (!res.ok) {
                throw new Error('User not found')
            }
            const data = await res.json()
            setProfile(data)
            setError(null)
        } catch (err) {
            setError(err.message)
            setProfile(null)
        }
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Fetch GitHub Profile</h2>

            <div className="mb-4">
                <input
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button
                    onClick={fetchAPI}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                    Update
                </button>
            </div>

            {error && (
                <div className="text-red-500 mb-4">
                    Error: {error}
                </div>
            )}

            {profile && (
                <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg">
                    {profile.avatar_url && (
                        <Image
                            className="rounded-full"
                            src={profile.avatar_url}
                            alt="Avatar"
                            width={100}
                            height={100}
                        />
                    )}
                    <div>
                        <div><strong>Login:</strong> {profile.login}</div>
                        <div><strong>ID:</strong> {profile.id}</div>
                        <div><strong>Public Repos:</strong> {profile.public_repos}</div>
                        <div><strong>Followers:</strong> {profile.followers}</div>
                    </div>
                </div>
            )}
        </div>
    )
}
