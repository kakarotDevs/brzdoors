import './App.css'
import { Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Order from './Pages/Order';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';


function App() {
  return (
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
  );
}

export default App
