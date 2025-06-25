import { BrowserRouter, Routes, Route } from "react-router-dom";import Layout from "./layout/Layout";
import IndexPage from "./views/IndexPage";
import About from "./views/About";
import Testimonial from "./views/Testimonial";
import Contact from "./views/Contact";
import Services from "./views/Services";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/testimonios" element={<Testimonial />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
