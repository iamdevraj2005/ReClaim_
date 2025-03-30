import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Electronics/Courses";
import Signup from "./components/Signup";
import Furniture from "./furniture/furniture";
import Clothes from "./Clothes/Clothes";
import Books from "./Books/Books"; 
import Contact from "./contact/contact"; 

import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/furniture" element={authUser ? <Furniture /> : <Navigate to="/signup" />} />
          <Route path="/clothes" element={authUser ? <Clothes /> : <Navigate to="/signup" />} />
          <Route path="/books" element={authUser ? <Books /> : <Navigate to="/signup" />} /> {/* Books Route Added */}
          <Route path="/contact" element={authUser ? <Contact /> : <Navigate to="/signup" />} /> 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
export default App;
