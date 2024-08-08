import React from "react";
// Importation composants reutilisable
import {
  Background,
  Description,
  Illustration,
  Testimonial
} from "../utils/Utils";
// Importation images
import logo from "../assets/SUNNYSIDE.png";
import oeuf from "../assets/oeuf.jpg";
import tasse from "../assets/tasse.jpg";
import cerise from "../assets/cerise.jpg";
import mandarine from "../assets/mandarine.jpg";
import emily from "../assets/emily.jpg";
import thomas from "../assets/thomas.jpg";
import jennie from "../assets/jennie.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import pinterest from "../assets/pinterest.svg";

export default function Section() {
  return (
    <>
      {/* Haut de page */}
      <main className="main h-[80.5vh]">
        <h1 className="header__title mt-8 font-bold text-white text-center text-4xl lg:text-6xl tracking-wide lg:tracking-wider uppercase font-fraunces font-black">
          We are creatives
        </h1>
      </main>
      {/* Première section */}
      <section className="abouts h-auto flex flex-wrap">
        <Description
          titre="Transform your brand"
          text="We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you."
          linkText="Learn more"
        />
        <Illustration img={oeuf} />
        <Illustration img={tasse} />
        <Description
          titre="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places."
          linkText="Learn more"
        />
        <Background
          bg={cerise}
          titre="Graphic design"
          text="Great design makes you memorable. We deliver artwork that 
              underscores your brand message and captures potential clients’
              attention."
          color="text-g1"
        />
        <Background
          bg={mandarine}
          titre="Photography"
          text="Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image."
          color="text-b1"
        />
      </section>
      {/* Deuxième section */}
      <section className="services h-auto flex-col justify-center items-center mt-10">
        <p className="text-center text-gray-400 font-bold uppercase tracking-wide leading-tight mb-[5%] lg:text-xl md:text-lg">
          CLIENT TESTIMONIALS
        </p>
        <div className="list flex flex-col px-[10%] lg:flex-row w-full">
          <Testimonial
            image={emily}
            text="We put our trust in Sunnyside and they delivered, making sure our needs were metand deadlines were always on time."
            name="Emily R."
            title="Marketing Director"
          />
          <Testimonial
            image={thomas}
            text="Sunnyside’s elegant design and professional layout gives our website a feeling of trust and solidity. We would highly recommend their services."
            name="Thomas S."
            title="Founder & CEO"
          />
          <Testimonial
            image={jennie}
            text="Excited to show off our new site! Sunnyside transformed our product and created a site that has resulted in a 200% increase in sales."
            name="Jennie F."
            title="Business Owner"
          />
        </div>
      </section>
      {/* Troisieme section */}
      <section className="gallery h-auto flex justify-center items-center w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-col-1">
          <img src={gallery1} alt="Gallery Image 1" className="w-full h-65vh" />
          <img src={gallery2} alt="Gallery Image 2" className="w-full h-65vh" />
          <img src={gallery3} alt="Gallery Image 3" className="w-full h-65vh" />
          <img src={gallery4} alt="Gallery Image 4" className="w-full h-65vh" />
        </div>
      </section>
      {/* Quatrième section */}
      <section className="contact h-auto flex-col justify-center items-center w-full px-[50px] py-[70px] bg-g2">
        <span className="w-full flex justify-center">
          <img src={logo} alt="" className="w-[15%] text-g1" />
        </span>
        <ul className="flex justify-center items-center px-[35%] py-[40px] text-g3 font-bold text-lg">
          <li className="mx-5">
            <a href="#about">About</a>
          </li>
          <li className="mx-5">
            <a href="#services">Services</a>
          </li>
          <li className="mx-5">
            <a href="#testimonials">Projects</a>
          </li>
        </ul>
        <div className="social flex flex-row justify-center items-center mt-[35px]">
          <img src={facebook} alt="" className="w-[20px] h-[20px] mx-[10px]" />
          <img src={instagram} alt="" className="w-[20px] h-[20px] mx-[10px]" />
          <img src={twitter} alt="" className="w-[20px] h-[20px] mx-[10px]" />
          <img src={pinterest} alt="" className="w-[20px] h-[20px] mx-[12px]" />
        </div>
      </section>
      {/* Cinquième section */}
      <footer className="footer h-auto flex flex-col justify-center items-center w-full px-[50px] py-[70px]">
        <span className="flex items-center text-g4 mb-3">
          <p className="text-xl me-1">Challenge</p>
          <h6 className="text-xl font-bold text-g1">Frontend Mentor.</h6>
        </span>
        <span className="flex items-center text-md text-g4">
          <p className="me-1">Code withe ❤️ by</p>
          <h6 className="font-bold text-g1">Cheikh A. T. Gueye</h6>
        </span>
      </footer>
    </>
  );
}