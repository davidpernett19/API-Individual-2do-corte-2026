import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (film) => {
    if (!favorites.find((f) => f.id === film.id)) {
      setFavorites([...favorites, film]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addFavorite={addFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;