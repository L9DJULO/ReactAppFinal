import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import "../assets/custom.css"; // Importing your CSS file

function NavbarApp() {
  return (
    <Navbar fluid rounded className="theme-dark">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="../images/logo_en_haut.png"
            className="mr-3 h-6 sm:h-9"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Button className="btn-solid">
          <Link to="/contact">Contact</Link>
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" className="btn">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/portfolio" className="btn">
            Portfolio
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
