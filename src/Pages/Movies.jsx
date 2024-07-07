import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Movies/Box";
import Chip from "../components/Movies/Chip";

function Movies() {
  const moviesData = [
    {
      id: 1,
      name: "Action",
      img: "",
    },
    {
      id: 2,
      name: "Drama",
      img: "",
    },
    {
      id: 3,
      name: "Romance",
      img: "",
    },
    {
      id: 4,
      name: "Thriller",
      img: "",
    },
    {
      id: 5,
      name: "Western",
      img: "",
    },
    {
      id: 6,
      name: "Horror",
      img: "",
    },
    {
      id: 7,
      name: "Fantasy",
      img: "",
    },
    {
      id: 8,
      name: "Music",
      img: "",
    },
    {
      id: 9,
      name: "Fiction",
      img: "",
    },
  ];
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  const handleNextPage =  () => {
    if(selectedMovies.length < 3) {
      alert("Please select at;east 3 movies.");
  } else { 
    localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies)); 
    localStorage.setItem("allData", JSON.stringify(moviesData));
    navigate("/browse");
  }}
  return (
    <>
      <p>Movies</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {moviesData.map((data) => {
          return (
            <Box
              key={data.id}
              data={data}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {selectedMovies.map((data) => {
          return (
            <Chip
              key={data.id}
              data={data}
              allData={moviesData}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          );
        })}
      </div>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
export default Movies;
