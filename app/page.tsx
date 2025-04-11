"use client";

export default function Home() {
  const products = [
    {
      name: "Fender Guitar",
      price: "$300",
      likes: 20,
      image: "https://images.unsplash.com/photo-1706356104839-5d3a4e8eb35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVuZGVyJTIwZ3VpdGFyfGVufDB8fDB8fHww",
      isNew: true,
    },
    {
      name: "Yamaha Piano",
      price: "$800",
      likes: 45,
      image: "https://images.unsplash.com/photo-1469939868368-83e00d69432e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: true,
    },
    {
      name: "Drum Set",
      price: "$500",
      likes: 34,
      image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: false,
    },
    {
      name: "Violin",
      price: "$250",
      likes: 18,
      image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: true,
    },
    {
      name: "Saxophone",
      price: "$600",
      likes: 30,
      image: "https://images.unsplash.com/photo-1655891182838-bbb0596a1d2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F4b3Bob25lfGVufDB8fDB8fHww",
      isNew: false,
    },
    {
      name: "Trumpet",
      price: "$320",
      likes: 22,
      image: "https://images.unsplash.com/photo-1627411187044-cc7a4daaca7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: false,
    },
    {
      name: "Electric Keyboard",
      price: "$450",
      likes: 28,
      image: "https://images.unsplash.com/photo-1708395260005-857cbefd05a4?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: true,
    },
    {
      name: "Flute",
      price: "$150",
      likes: 17,
      image: "https://images.unsplash.com/photo-1666209932578-668a10a2560c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsdXRlfGVufDB8fDB8fHww",
      isNew: false,
    },
    {
      name: "Cello",
      price: "$700",
      likes: 19,
      image: "https://images.unsplash.com/photo-1661988652819-c84e5cdecdad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlbGxvfGVufDB8fDB8fHww",
      isNew: false,
    },
    {
      name: "Bass Guitar",
      price: "$400",
      likes: 24,
      image: "https://images.unsplash.com/photo-1543060749-aa3f115aad09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzcyUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      isNew: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-white text-center py-6 bg-gray-800">
          Music Store
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold flex items-center">
                {item.name}
                {item.isNew && (
                  <span className="ml-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                    New
                  </span>
                )}
              </h3>
              <p className="text-gray-600 mt-1">Price: {item.price}</p>
              <p className="text-gray-600">Likes: {item.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
