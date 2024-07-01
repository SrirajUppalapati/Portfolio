import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Applayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
