import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./webpages/Layout";

import Home from "./webpages/home";
import Gallery from "./webpages/gallery";
import Login from "./webpages/login";
import WeddingDetails from "./webpages/weddingDetails";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    fetch("http://localhost:3000").then((res) => res.json());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="login" element={<Login />} />
          <Route path="wedding details" element={<WeddingDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
