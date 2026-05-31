import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./style/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            Ritik<span>.</span>
          </div>

          <ul className="nav-links">
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("services")}>Services</li>
            <li onClick={() => scrollTo("portfolio")}>Projects</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>

          <button
            className="hire-btn"
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </button>

          <div
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </div>
        </div>

        {open && (
          <div className="mobile-menu">
            <div onClick={() => scrollTo("about")}>About</div>
            <div onClick={() => scrollTo("services")}>Services</div>
            <div onClick={() => scrollTo("portfolio")}>Projects</div>
            <div onClick={() => scrollTo("contact")}>Contact</div>
          </div>
        )}
      </nav>
    </>
  );
}