import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import "../assets/custom.css";

const FooterApp = () => {
  return (
    <Footer className="bg-navy-900 dark:bg-navy-900">
      <div>
        <div className="w-full text-center text-navy-300 dark:text-navy-300">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand>
              <Link to="/">
                <img
                  src="../public/images/website-logo-sample.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Sample website logo"
                />
              </Link>
            </Footer.Brand>
            <Footer.LinkGroup>
              <Footer.Link
                href="#"
                className="text-navy-300 dark:text-navy-300"
              >
                About
              </Footer.Link>
              <Footer.Link
                href="#"
                className="text-navy-300 dark:text-navy-300"
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link
                href="#"
                className="text-navy-300 dark:text-navy-300"
              >
                Licensing
              </Footer.Link>
              <Footer.Link
                href="#"
                className="text-navy-300 dark:text-navy-300"
              >
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
