import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /*=============== Change Background Header on Scroll ===============*/
  useEffect(() => {
    const handleHeaderBackground = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleHeaderBackground);
    return () => window.removeEventListener("scroll", handleHeaderBackground);
  }, []);

  /*=============== Update activeNav When Scrolling ===============*/
  useEffect(() => {
    // Select all sections with an id attribute
    const sections = document.querySelectorAll("section[id]");

    const handleActiveNav = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        // Use an offset (e.g., 50px) if you need a little buffer before the section is considered active
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleActiveNav);
    return () => window.removeEventListener("scroll", handleActiveNav);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sriraj Uppalapati
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                Qualifications
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
