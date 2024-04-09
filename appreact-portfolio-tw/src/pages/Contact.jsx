import { Link } from "react-router-dom";
import "../assets/custom.css";

const Contact = () => {
  return (
    <>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28 bg-white dark:bg-gray-900">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Get in touch
        </h2>
        <p>
          Have a project you would like to discuss? Let's make something great
          together! Email me at Jules.lange@hotmail.fr or use the form below to
          let me know a little more about your objectives and I'll get back to
          you.
        </p>
      </section>
    </>
  );
};

export default Contact;
