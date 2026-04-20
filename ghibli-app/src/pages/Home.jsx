import { useEffect, useState } from "react";
import { getFilms } from "../services/api";
import FilmList from "../components/FilmList";
import FilmDetail from "../components/FilmDetail";
import SearchBar from "../components/SearchBar";

export default function Home({ addFavorite }) {
  const [films, setFilms] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFilms().then(setFilms);
  }, []);

  const filtered = films.filter((f) =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="container">
    <SearchBar setSearch={setSearch} />
    <FilmDetail film={selected} addFavorite={addFavorite} />
    <FilmList films={filtered} onSelect={setSelected} />
  </div>
);
}