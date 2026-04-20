export default function FilmList({ films, onSelect }) {
  return (
    <div className="grid">
      {films.map((film) => (
        <div
          key={film.id}
          className="card"
          onClick={() => onSelect(film)}
        >
          <h3>{film.title}</h3>
          <p>{film.release_date}</p>
        </div>
      ))}
    </div>
  );
}