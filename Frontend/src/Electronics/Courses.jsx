import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const electronicsData = [
  {
    id: 1,
    name: "MacBook Pro (M1, 2020)",
    price: 999,
    rentPrice: 99,
    stock: 5,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-silver-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621726000",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 899,
    rentPrice: 79,
    stock: 2,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753619946",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 199,
    rentPrice: 19,
    stock: 8,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972361",
  }
];

function Electronics() {
  const [rentalDuration, setRentalDuration] = useState({});
  
  const handleRentalChange = (id, value) => {
    setRentalDuration((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Latest Gadgets & Tech
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {electronicsData.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg p-6 shadow-lg hover:shadow-xl transition bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-contain rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.name}</h3>
              <p className={`font-medium mb-2 ${item.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                {item.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
              </p>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-white text-sm">Buy Price</p>
                  <p className="text-lg font-bold text-white">₹{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">Rent Price</p>
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
                <p className="mt-1 text-sm text-gray-600">Total Rent: ₹{rentalDuration[item.id] ? item.rentPrice * rentalDuration[item.id] : 0}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`flex-1 ${
                    item.stock > 0 ? "bg-blue-500 text-white border border-blue-600 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                  } py-2 px-3 rounded-md transition`}
                  disabled={item.stock === 0}
                >
                  Buy Now
                </button>
                <button
                  className="flex-1 bg-white text-black border border-gray-300 hover:bg-gray-100 py-2 px-3 rounded-md transition"
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

export default Electronics;