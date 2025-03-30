import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const furnitureData = [
  {
    id: 1,
    name: "Sofa",
    price: 4999,
    rentPrice: 199,
    stock: 10,
    image: "https://media.furniturevillage.co.uk/i/fv/PRODZFRSP000000000045956_link_fabric-corner-chaise-power-sofa__lifestyle?$product$&fmt=webp&h=808&w=1146",
  },
  {
    id: 2,
    name: "Table",
    price: 1000,
    rentPrice: 20,
    stock: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp6oyBLzNwmb51XUC2gOzBKP91ro4iNL9ww&s",
  },
  {
    id: 3,
    name: "Book Shelf",
    price: 1500,
    rentPrice: 39,
    stock: 15,
    image: "https://m.media-amazon.com/images/I/613N8pYzi1L._AC_UF1000,1000_QL80_.jpg",
  },
];

function Furniture() {
  const [rentalDuration, setRentalDuration] = useState({});

  const handleRentalChange = (id, value) => {
    if (value === "") {
      setRentalDuration((prev) => ({ ...prev, [id]: "" }));
    } else {
      const duration = Math.max(1, parseInt(value) || 1);
      setRentalDuration((prev) => ({ ...prev, [id]: duration }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Furniture 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {furnitureData.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg p-6 shadow-lg hover:shadow-xl transition bg-white dark:bg-gray-800"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.name}</h3>
              <p className={`font-medium mb-2 ${item.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                {item.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
              </p>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-gray-500 text-sm">Buy Price</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">₹{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Rent Price</p>
                  <p className="text-lg font-bold text-white">₹{item.rentPrice}/day</p>
                </div>
              </div>
              <div className="mb-3">
                <label className="text-gray-600 text-sm">Select Rental Duration (Days)</label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-2 border rounded-md"
                  value={rentalDuration[item.id] || ""}
                  onChange={(e) => handleRentalChange(item.id, e.target.value)}
                />
                <p className="mt-1 text-sm text-gray-600">
                  Total Rent: ₹{rentalDuration[item.id] ? item.rentPrice * rentalDuration[item.id] : 0}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`flex-1 ${
                    item.stock > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                  } text-white py-2 px-3 rounded-md transition`}
                  disabled={item.stock === 0}
                >
                  Buy Now
                </button>
                <button
                  className={`flex-1 ${
                    item.stock > 0 ? "bg-gray-200 hover:bg-gray-300 text-gray-800" : "bg-gray-400 cursor-not-allowed text-gray-600"
                  } py-2 px-3 rounded-md font-semibold`}
                  disabled={item.stock === 0}
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Furniture;
