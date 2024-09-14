import { Footer } from "../../common/Footer/Footer";
import { Hero } from "../../common/Hero/Hero";
import { Navbar } from "../../common/Navbar/Navbar";
import { Productos } from "../../common/Productos/Productos";
export const HomePage = () => {
    return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <Footer />
    </>
  );
};
