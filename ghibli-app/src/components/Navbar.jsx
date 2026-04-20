import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <h3>Ghibli App</h3>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div className="menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/favorites" onClick={() => setOpen(false)}>Favoritos</Link>
          <Link to="/info" onClick={() => setOpen(false)}>Info</Link>
        </div>
      )}
    </div>
  );
}