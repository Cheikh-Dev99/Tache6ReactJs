import React from "react";
import Navbar from "./componant/Navbar";
import Section from "./componant/Section";
import img1 from "./assets/orange.jpg";

export default function App() {
  return (
    <>
      <div
        className="section h-screen bg-cover bg-center px1 text-normal sm:text-sm"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <Navbar />
        <Section />
      </div>
    </>
  );
}
