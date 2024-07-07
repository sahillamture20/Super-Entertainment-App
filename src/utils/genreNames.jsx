// Retrieve and parse selectedMovies and allData from localStorage
const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies")) || [];
const allData = JSON.parse(localStorage.getItem("allData")) || [];

// // Map over selectedMovies to find the corresponding movie objects in allData
// export const genreNames = selectedMovies.map((id) => {
//   const movie = allData.find((movie) => movie.id === id);
//   if (movie && Array.isArray(movie.genre_id)) {
//     // Extract genre names if movie and genre_id array exist
//     return movie.genre_id.map((genre) => genre.name);
//   }
//   return [];
// }).flat(); // Flatten the array of arrays into a single array of genre names

// console.log(genreNames);
// const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies")); // [1,2,3]
// const allData = JSON.parse(localStorage.getItem("allData"));
export const genreNames = selectedMovies.map((id) => {
  return allData.find((movie) => movie.id === id);
});