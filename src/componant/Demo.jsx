import React from "react";

export default function Demo() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <header
        className="relative p-8 bg-cover bg-center h-[538px] md:h-[700px] lg:h-[800px]"
        style={{ backgroundImage: "url(../images/mobile/image-header.jpg)" }}
      >
        <img className="h-6 md:h-8" src="./dist/images/logo.svg" alt="" />
        <button
          className="absolute top-4 right-4 md:hidden"
          id="nav-toggle"
          aria-label="toggle navigation"
        >
          <span className="block relative w-8 h-0.5 bg-white before:content-[''] before:absolute before:top-2 before:w-full before:h-full before:bg-white after:content-[''] after:absolute after:bottom-2 after:w-full after:h-full after:bg-white"></span>
        </button>
        <nav
          id="nav"
          className="bg-white absolute top-9 right-0 w-full max-w-xs h-[329px] md:static md:bg-transparent md:h-auto md:max-w-none md:flex md:justify-end"
        >
          <ul className="flex flex-col justify-evenly h-full pt-8 md:pt-0 md:flex-row md:items-end">
            <li className="text-center py-3 md:py-0 md:px-4 hover:bg-yellow-500 md:hover:bg-blue-500">
              <a
                className="text-gray-600 md:text-white md:text-lg"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="text-center py-3 md:py-0 md:px-4 hover:bg-yellow-500 md:hover:bg-blue-500">
              <a
                className="text-gray-600 md:text-white md:text-lg"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="text-center py-3 md:py-0 md:px-4 hover:bg-yellow-500 md:hover:bg-blue-500">
              <a
                className="text-gray-600 md:text-white md:text-lg"
                href="#testimonials"
              >
                Projects
              </a>
            </li>
            <li className="text-center py-3 md:py-0 md:px-4 hover:bg-yellow-500 md:hover:bg-blue-500">
              <a
                className="text-gray-600 md:text-white md:text-lg"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="text-white text-center mt-8 text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide md:tracking-wider lg:tracking-widest">
          We are creatives
        </h1>
        <img
          className="absolute w-8 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 md:top-3/5"
          src="./dist/images/icon-arrow-down.svg"
          alt="arrow pointing down"
        />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2" id="about">
        <picture>
          <source
            srcSet="./dist/images/desktop/image-transform.jpg"
            media="(min-width: 750px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-transform.jpg"
            alt="white chicken egg on vivid yellow background"
          />
        </picture>
        <div className="text-center md:text-left p-8 md:p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Transform your brand
          </h2>
          <p className="text-gray-500 py-6">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className="relative block uppercase font-bold text-yellow-500 after:block after:border-4 after:border-yellow-500 hover:after:border-yellow-600"
            href="#services"
          >
            Learn more
          </a>
        </div>
        <picture>
          <source
            srcSet="./dist/images/desktop/image-stand-out.jpg"
            media="(min-width: 750px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-stand-out.jpg"
            alt="pink glass on pink background"
          />
        </picture>
        <div className="text-center md:text-left p-8 md:p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Stand out to the right audience
          </h2>
          <p className="text-gray-500 py-6">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            className="relative block uppercase font-bold text-red-500 after:block after:border-4 after:border-red-500 hover:after:border-red-600"
            href="#services"
          >
            Learn more
          </a>
        </div>
      </section>
      <section className="flex flex-col md:flex-row" id="services">
        <div className="w-full md:w-1/2 relative text-center">
          <picture>
            <source
              srcSet="./dist/images/desktop/image-graphic-design.jpg"
              media="(min-width: 600px)"
            />
            <img
              className="w-full object-cover"
              src="./dist/images/mobile/image-graphic-design.jpg"
              alt="two cherries on green background"
            />
          </picture>
          <h3 className="absolute top-2/3 md:top-1/2 transform md:-translate-y-1/2 text-lg md:text-xl font-bold">
            Graphic design
          </h3>
          <p className="absolute top-3/4 md:top-2/3 transform md:-translate-y-1/2 text-sm md:text-base max-w-[80%] mx-auto">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative text-center">
          <picture>
            <source
              srcSet="./dist/images/desktop/image-photography.jpg"
              media="(min-width: 600px)"
            />
            <img
              className="w-full object-cover"
              src="./dist/images/mobile/image-photography.jpg"
              alt="one orange fruit on blue background"
            />
          </picture>
          <h3 className="absolute top-2/3 md:top-1/2 transform md:-translate-y-1/2 text-lg md:text-xl font-bold">
            Photography
          </h3>
          <p className="absolute top-3/4 md:top-2/3 transform md:-translate-y-1/2 text-sm md:text-base max-w-[80%] mx-auto">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
      <section
        className="text-center py-14 md:py-20 lg:py-36"
        id="testimonials"
      >
        <p className="uppercase text-lg font-bold tracking-wider">
          Client testimonials
        </p>
        <div className="md:flex md:flex-row md:justify-center">
          <div className="py-12 md:py-0 md:px-6 lg:px-10">
            <img
              className="h-18 w-18 rounded-full mx-auto"
              src="./dist/images/image-emily.jpg"
              alt="Emily"
            />
            <p className="text-gray-700 py-8 px-6 mx-auto max-w-md">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="text-lg font-bold text-gray-900">Emily R.</p>
            <p className="text-sm text-gray-500">Marketing Director</p>
          </div>
          <div className="py-12 md:py-0 md:px-6 lg:px-10">
            <img
              className="h-18 w-18 rounded-full mx-auto"
              src="./dist/images/image-thomas.jpg"
              alt="Thomas"
            />
            <p className="text-gray-700 py-8 px-6 mx-auto max-w-md">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="text-lg font-bold text-gray-900">Thomas S.</p>
            <p className="text-sm text-gray-500">Chief Operating Officer</p>
          </div>
          <div className="py-12 md:py-0 md:px-6 lg:px-10">
            <img
              className="h-18 w-18 rounded-full mx-auto"
              src="./dist/images/image-jennie.jpg"
              alt="Jennie"
            />
            <p className="text-gray-700 py-8 px-6 mx-auto max-w-md">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="text-lg font-bold text-gray-900">Jennie F.</p>
            <p className="text-sm text-gray-500">Business Owner</p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap">
        <picture className="w-1/2 lg:w-1/4">
          <source
            srcSet="./dist/images/desktop/image-gallery-milkbottles.jpg"
            media="(min-width: 1000px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-gallery-milkbottles.jpg"
            alt="milk bottles"
          />
        </picture>
        <picture className="w-1/2 lg:w-1/4">
          <source
            srcSet="./dist/images/desktop/image-gallery-orange.jpg"
            media="(min-width: 1000px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-gallery-orange.jpg"
            alt="orange"
          />
        </picture>
        <picture className="w-1/2 lg:w-1/4">
          <source
            srcSet="./dist/images/desktop/image-gallery-cone.jpg"
            media="(min-width: 1000px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-gallery-cone.jpg"
            alt="cone"
          />
        </picture>
        <picture className="w-1/2 lg:w-1/4">
          <source
            srcSet="./dist/images/desktop/image-gallery-sugarcubes.jpg"
            media="(min-width: 1000px)"
          />
          <img
            className="w-full object-cover"
            src="./dist/images/mobile/image-gallery-sugarcubes.jpg"
            alt="sugar cubes"
          />
        </picture>
      </section>
      <footer className="bg-teal-300 p-16 text-center">
        <img
          className="h-auto w-44 mx-auto mb-8"
          src="./dist/images/logo.svg"
          alt="logo"
        />
        <ul className="flex justify-center space-x-8 mb-16">
          <li>
            <a className="text-teal-700 hover:text-white" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-teal-700 hover:text-white" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-teal-700 hover:text-white" href="#projects">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-8">
          <a href="#">
            <img
              src="./dist/images/icon-facebook.svg"
              alt="Facebook"
              className="hover:filter-invert"
            />
          </a>
          <a href="#">
            <img
              src="./dist/images/icon-instagram.svg"
              alt="Instagram"
              className="hover:filter-invert"
            />
          </a>
          <a href="#">
            <img
              src="./dist/images/icon-twitter.svg"
              alt="Twitter"
              className="hover:filter-invert"
            />
          </a>
          <a href="#">
            <img
              src="./dist/images/icon-pinterest.svg"
              alt="Pinterest"
              className="hover:filter-invert"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
