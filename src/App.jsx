import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "./components/Footer";

import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  return (
    <div className="text-center">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};
