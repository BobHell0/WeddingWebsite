import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./webpages/Layout";

import Home from "./webpages/home";
import Gallery from "./webpages/gallery";
import Login from "./webpages/login";
import WeddingDetails from "./webpages/weddingDetails";
import RSVP from "./webpages/rsvp";
import { useEffect, useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    fetch("http://localhost:3000").then((res) => res.json());
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="login" element={<Login setLoggedIn={setLoggedIn} setUserEmail={setUserEmail}/>} />
            <Route path="wedding details" element={<WeddingDetails />} />
            {/* No button or anything to get to this path yet: */}
            <Route path="rsvp" element={<RSVP loggedIn={loggedIn} userEmail={userEmail}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
