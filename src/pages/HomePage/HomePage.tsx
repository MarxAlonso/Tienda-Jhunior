import { Banner } from "../../common/Banner/Banner";
import { Footer } from "../../common/Footer/Footer";
import { Hero } from "../../common/Hero/Hero";
import { Navbar } from "../../common/Navbar/Navbar";
import { Productos } from "../../common/Productos/Productos";
import { ProductosLista } from "../../common/ProductosLista/ProductosLista";
import { Testimonios } from "../../common/Testimonios/Testimonios";
export const HomePage = () => {
    return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <ProductosLista />
      <Testimonios />
      <Banner />
      <Footer />
    </>
  );
};
