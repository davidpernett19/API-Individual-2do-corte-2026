export default function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Buscar..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}