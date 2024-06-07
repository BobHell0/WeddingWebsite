import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { server_endpoint } from "./serverEndpoint";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./webpages/Layout";

import Home from "./webpages/home";
import Gallery from "./webpages/gallery";
import Login from "./webpages/login";
import WeddingDetails from "./webpages/weddingDetails";
import RSVP from "./webpages/rsvp";
import { useEffect, useState } from "react";

export default function App() {
  const historicalLoggedIn = window.localStorage.getItem('loggedIn');
  const boolHistoricalLoggedIn = historicalLoggedIn === 'true' ? true : false
  const [loggedIn, setLoggedIn] = useState(boolHistoricalLoggedIn)

  const historicalGroupId = window.localStorage.getItem('groupID');
  const intHistoricalGroupID = historicalGroupId ? parseInt(historicalGroupId) : -1
  const [groupID, setGroupId] = useState(intHistoricalGroupID)

  useEffect(() => {
    try {
      const historicalLoggedIn = window.localStorage.getItem('loggedIn');
      console.log(`Historical Logged in = ${historicalLoggedIn}`)
      console.log(`Type of historical logged in = ${typeof(historicalLoggedIn)}`)
      setLoggedIn(historicalLoggedIn === 'true' ? true : false)
      console.log(` loggedIn = ${loggedIn}`)
      console.log(`typeof loggedIn = ${typeof(loggedIn)}`)

      const historicalGroupId = window.localStorage.getItem('groupID');
      console.log(`Historical GroupID = ${historicalGroupId}`);
      console.log(`Type of historical groupID = ${typeof(historicalGroupId)}`)

      if (historicalGroupId != null) {
        setGroupId(parseInt(historicalGroupId))
        console.log(`newGroupId = ${groupID}`)
        console.log(`typeof newGroupId = ${typeof(groupID)}`)
      }
    } catch (error: any) {
      console.error(`Error thrown at App.tsx : ${error.message}`)
    }
  }, [])

  useEffect(() => {
    fetch(`${server_endpoint}`).then((res) => res.json());
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} groupId={groupID} setGroupId={setGroupId}/>} />
            <Route path="wedding details" element={<WeddingDetails />} />
            {/* No button or anything to get to this path yet: */}
            <Route path="rsvp" element={<RSVP loggedIn={loggedIn} setLoggedIn={setLoggedIn} groupId={groupID} setGroupId={setGroupId}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
