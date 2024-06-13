import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Addyourown from "./components/Addyourown";
import Testimonial from "./components/Testimonial";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Abovefooter from "./components/Abovefooter";
import Footer from "./components/Footer";

export default function Main() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Cards/>
    <Addyourown/>
    <Testimonial/>
    <Abovefooter/>
    <Footer/>
   </div>
  );
}
