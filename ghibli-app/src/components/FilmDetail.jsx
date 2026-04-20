export default function FilmDetail({ film, addFavorite }) {
  if (!film) return null;

  return (
    <div className="detail">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p><b>Director:</b> {film.director}</p>
      <p><b>Año:</b> {film.release_date}</p>
      <button onClick={() => addFavorite(film)}>
  Agregar a favoritos
</button>
    </div>
  );
}