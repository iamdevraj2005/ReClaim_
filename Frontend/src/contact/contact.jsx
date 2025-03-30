import React, { useState, useEffect } from "react";

const generateProducts = () => {
  return [
    // Rental Products
    {
      id: 1,
      name: "Laptop (Rental) - HP i5",
      price: 1200,
      quantity: 1,
      category: "Rental",
      image: "https://m.media-amazon.com/images/I/71bw+-RvJ9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: " DSLR (Rental) ",
      price: 3000,
      quantity: 1,
      category: "Rental",
      image: "https://poojaelectronics.in/storage/2023/08/Nikon-D7500-DSLR-Camera-with-18-140mm-Lens-Online-Buy-India_01-800x800.jpg",
    },
    {
      id: 3,
      name: "Sofa Set (Rental)",
      price: 800,
      quantity: 1,
      category: "Rental",
      image: "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-blue__0868912_pe781422_s5.jpg?f=xl",
    },

    // Refurbished Products
    {
      id: 4,
      name: "Refurbished iPhone 12",
      price: 35000,
      quantity: 1,
      category: "Refurbished",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSW8KtYOs4jueIYdWWA887Xlek0lKLzGG02URPsQebsRq2ewsUu3Oox1s7Ohbb7yxWZmC_QupGYsHFalSr52fs_s5wRedO84w&usqp=CAE",
    },
    {
      id: 5,
      name: "Refurbished Dell Laptop",
      price: 28000,
      quantity: 1,
      category: "Refurbished",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9t-tu6EgGHpeqaRhaNRKonZCOLVzxD10Bf-Djh5pocoEi_bzWibayrkcRsdj2zVAkUTFR1-_V5122mPbWZ8wun4WjgNA7-nQyGRw1_G9UhwmXDr8RnCLK1w&usqp=CAE",
    },
    {
      id: 6,
      name: "Refurbished Smart TV",
      price: 18000,
      quantity: 1,
      category: "Refurbished",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRov8vdvQn3egkBnLSlo2MJTCaTiBUuvjLR_VWrICUrPBGUWaZIRcbYMcH26SjwYvbtyMZpNdaUo-aol0nJ30ZdT_qZ9s6XobTlGoJYkEofWVKzAvk0GhNGiA&usqp=CAE",
    },
  ];
};

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if (!cartData || cartData.length === 0) {
      cartData = generateProducts();
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
    setProducts(cartData);
  }, []);

  const handleIncrease = (id) => {
    const updatedCart = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (id) => {
    const updatedCart = products
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 🔹 Total count and total price calculation
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  return (
    <div className="p-6 border rounded-lg shadow-lg max-w-lg mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        🛒 Shopping Cart
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-4 bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      product.category === "Rental"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {product.category}
                  </p>
                  <p className="text-gray-600 font-medium">₹{product.price}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleDecrease(product.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() => handleIncrease(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total count and total price */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Items: {totalItems}
            </h3>
            <h3 className="text-lg font-semibold text-gray-700">
              Total Price: ₹{totalPrice}
            </h3>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 text-center">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-semibold shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
