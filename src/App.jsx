import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";
import backgroundImage from "./assets/images/web-background.png";
import { setAirtableUrls } from "./services/airtableService"; // Import the service

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Store Airtable URLs on app load if they aren't already in localStorage
    const airtableUrls = localStorage.getItem("airtableUrls");

    // Check if airtableUrls exist and whether they are too old (for example, 1 day old)
    const storedTimestamp = localStorage.getItem("airtableUrlsTimestamp");
    const currentTime = new Date().getTime();
    const expiryTime = 24 * 60 * 60 * 1000; // 1 day

    if (!airtableUrls || currentTime - storedTimestamp > expiryTime) {
      setAirtableUrls(); // Preload and store Airtable URLs if not already cached or if expired
    }
  }, []); // Run only once when the app starts

  return (
    <div className={`min-h-screen w-full ${isHomePage ? "bg-home" : ""}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
