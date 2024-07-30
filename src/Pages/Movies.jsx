import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Movies/Box";
import Chip from "../components/Movies/Chip";
import ActionImg from "../assets/image2.png";
import DramaImg from "../assets/image3.png";
import RomanceImg from "../assets/image4.png";
import ThrillerImg from "../assets/image6.png";
import WesternImg from "../assets/image7.png";
import HorrorImg from "../assets/image8.png";
import FantasyImg from "../assets/image9.png";
import MusicImg from "../assets/image10.png";
import FictionImg from "../assets/image11.png";

function Movies() {
  const moviesData = [
    { id: 1, name: "Action", img: ActionImg, bgColor: "#FF5209" },
    { id: 2, name: "Drama", img: DramaImg, bgColor: "#D7A4FF" },
    { id: 3, name: "Romance", img: RomanceImg, bgColor: "#148A08" },
    { id: 4, name: "Thriller", img: ThrillerImg, bgColor: "#84C2FF" },
    { id: 5, name: "Western", img: WesternImg, bgColor: "#902500" },
    { id: 6, name: "Horror", img: HorrorImg, bgColor: "#7358FF" },
    { id: 7, name: "Fantasy", img: FantasyImg, bgColor: "#FF4ADE" },
    { id: 8, name: "Music", img: MusicImg, bgColor: "#E61E32" },
    { id: 9, name: "Fiction", img: FictionImg, bgColor: "#6CD061" },
  ];

  const [selectedMovies, setSelectedMovies] = useState([]);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (selectedMovies.length < 3) {
      setShowError(true);
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      localStorage.setItem("allData", JSON.stringify(moviesData));
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (selectedMovies.length >= 3) {
      setShowError(false);
    }
  }, [selectedMovies]);

  return (
    <div className="flex flex-row bg-black min-h-screen text-white items-center justify-around">
      <div className="flex flex-col justify-end p-5 h-full">
        <div>
          <h2 className="text-green-400 text-3xl mb-7">Super App</h2>
          <h2 className="text-3xl font-semibold w-56 mb-7">Choose your entertainment category</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 w-60 h-0 mb-10">
          {selectedMovies.map((data) => (
            <Chip
              key={data.id}
              data={data}
              allData={moviesData}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        {showError && (
          <div className="">
            <p id="error" className="text-red-500 h-20">Minimum 3 categories required</p>
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {moviesData.map((data) => (
            <Box
              key={data.id}
              data={data}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        <button onClick={handleNextPage} className="flex flex-row justify-around bg-customGreen text-white text-center p-1 m-1 rounded-3xl w-28">Next Page</button>
      </div>
    </div>
  );
}

export default Movies;
