import { FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-red-500 h-[50px] sticky bottom-0 flex flex-row gap-x-4 justify-center items-center">
      <h1>&copy; 2024 Sriraj Uppalapati. All Rights Reserved.</h1>
      <Link
        className="text-3xl"
        to="https://www.linkedin.com/in/sriraj-uppalapati-703032166/"
      >
        <LiaLinkedin />
      </Link>
      <Link className="text-2xl" to="https://github.com/SrirajUppalapati">
        <FaGithub />
      </Link>
    </div>
  );
}

export default Footer;
