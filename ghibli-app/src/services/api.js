export const getFilms = async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films/");
  return await res.json();
};