import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Aboutus from "./pages/Aboutus/Aboutus";

import Services from "./pages/Services/Services";

import Projects from "./pages/Projects/Projects";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactUsPage from "./pages/Contactus/Contactus";
import ServiceDetail from "./pages/Services/ServiceDetail";
import ServicesCategory from "./pages/Services/ServicesCategory";
import AboutUsPage from "./pages/Aboutus/AboutUsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:category" element={<ServicesCategory />} />
        <Route path="/services/:category/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
