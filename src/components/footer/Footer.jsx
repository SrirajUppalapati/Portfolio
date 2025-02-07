import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sriraj Uppalapati</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sriraj Uppalapati. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
