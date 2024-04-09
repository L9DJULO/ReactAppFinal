import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "../assets/custom.css";

const Portfolio = () => {
  return (
    <>
      <section
        className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22 py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28"
        style={{ backgroundColor: "#B8C1EC" }}
      >
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Portfolio
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          Below you can see a selection of my web design and front-end
          development projects.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <img
          src="../images/project-fashion.jpg"
          alt="Fashion web page project"
          className="object-cover w-full h-full"
        />
        <img
          src="../images/project-smoothie.jpg"
          alt="Smoothie web page project"
          className="object-cover w-full h-full"
        />
        <img
          src="../images/project-crypto-wallet.png"
          alt="Crypto wallet web page project"
          className="object-cover w-full h-full"
        />
        <img
          src="../images/project-hero.png"
          alt="Hero blocks web page project"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
};

export default Portfolio;
