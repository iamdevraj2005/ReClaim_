import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function furniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    const getFurniture = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setFurniture(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFurniture();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Discover Beautiful <span className="text-green-500">furniture!</span>
          </h1>
          <p className="mt-12">
            Explore our collection of high-quality furniture designed to enhance
            your living space. From cozy sofas to elegant dining tables, we have
            something for every home.
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {furniture.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default furniture;
