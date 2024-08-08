import React from "react";

const links = [
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Projects" },
  { href: "#", label: "CONTACT" },
];

export const NavLinks = ({ isMobile }) => (
  <ul
    className={`flex ${
      isMobile
        ? "flex-col items-center mt-4 gap-6 text-sm"
        : "items-center gap-6"
    }`}
  >
    {links.slice(0, 3).map((link) => (
      <li
        key={link.label}
        className="rounded-full px-5 py-3 text-md font-bold hover:text-lg hover:bg-gray-200"
      >
        <a
          className="mx-3 text-white transition hover:text-white"
          href={link.href}
        >
          {link.label}
        </a>
      </li>
    ))}
    {isMobile && (
      <li>
        <a
          className="rounded-full bg-white px-5 py-3 text-xs font-medium text-dark"
          href={links[3].href}
        >
          {links[3].label}
        </a>
      </li>
    )}
  </ul>
);
export const MobileMenu = ({ isMenuOpen }) =>
  isMenuOpen && (
    <nav aria-label="Mobile" className="md:hidden">
      <NavLinks isMobile />
    </nav>
  );
// Création d'un composant réutilisable pour les sous-sections avec texte et image
export const Description = ({ titre, text, linkText }) => (
  <div className="description flex flex-col justify-center items-center w-full lg:w-1/2 h-full lg:h-[100vh]">
    <div className="p-[20%]">
      <h2 className="text-grayTitle font-bold mb-5 lg:text-4xl md:text-3xl">
        {titre}
      </h2>
      <p className="text-lg text-greyText font-bold mb-5">
        {text}
      </p>
      <a
        className="text-lg text-gray-700 font-bold px-2 relative after:content-[''] after:display-block"
        href=""
      >
        {linkText}
      </a>
    </div>
  </div>
);
export const Illustration = ({ img }) => (
  <div className="illustration flex justify-center items-center w-full lg:w-1/2 h-full lg:h-[100vh]">
    <img src={img} alt="oeuf" className="w-full h-full object-cover" />
  </div>
);
export const Background = ({ bg, titre, text, color }) => (
  <div
    className="background flex-col justify-center items-center lg:w-1/2 lg:h-full sm:h-[50vh] bg-cover bg-center px-[110px] pt-[250px] pb-[50px]"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <h2 className={`text-center ${color} font-bold mb-5 text-4xl`}>{titre}</h2>
    <p className={`text-center ${color} text-lg font-bold mb-5`}>{text}</p>
  </div>
);
// Création d'un composant réutilisable pour les sous-sections avec témoignages
export const Testimonial = ({ image, text, name, title }) => (
  <div className="flex flex-col justify-center items-center w-full lg:w-1/3 h-full mb-3 lg:h-[100vh]">
    <img
      src={image}
      alt=""
      className="rounded-full w-[80px] h-[80px] mb-[50px]"
    />
    <p className="text-center text-gray-500 mb-[50px] px-[50px] lg:text-lg md:text-sm">
      {text}
    </p>
    <span className="text-center">
      <p className="text-gray-800 font-bold text-lg mb-3">{name}</p>
      <p className="text-gray-300 font-bold text-sm mb-3">{title}</p>
    </span>
  </div>
);