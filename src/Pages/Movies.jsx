import { useState } from "react";
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
    {
      id: 1,
      name: "Action",
      img: ActionImg,
      bgColor: "#FF5209"
    },
    {
      id: 2,
      name: "Drama",
      img: DramaImg,
      bgColor: "#D7A4FF"
    },
    {
      id: 3,
      name: "Romance",
      img: RomanceImg,
      bgColor: "#148A08"
    },
    {
      id: 4,
      name: "Thriller",
      img: ThrillerImg,
      bgColor: "#84C2FF"
    },
    {
      id: 5,
      name: "Western",
      img: WesternImg,
      bgColor: "#902500"
    },
    {
      id: 6,
      name: "Horror",
      img: HorrorImg,
      bgColor: "#7358FF"
    },
    {
      id: 7,
      name: "Fantasy",
      img: FantasyImg,
      bgColor: "#FF4ADE"
    },
    {
      id: 8,
      name: "Music",
      img: MusicImg,
      bgColor: "#E61E32"
    },
    {
      id: 9,
      name: "Fiction",
      img: FictionImg,
      bgColor: "#6CD061"
    },
  ];
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  const handleNextPage = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies.");
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      localStorage.setItem("allData", JSON.stringify(moviesData));
      navigate("/browse");
    }
  };
  return (
    <div className="flex flex-row bg-black min-h-screen text-white items-center">
      <div className="w-1/3 h-full">
        <h2 className="text-green-400 text-3xl px-4 py-8">Super App</h2>
        <h2 className="text-3xl font-semibold mt-5 p-4">Choose your entertainment category</h2>
        <div className="grid grid-cols-2">
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
      </div>
      <div className="w-2/3">
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
        <button onClick={handleNextPage} className="flex flex-row justify-around bg-customGreen text-white text-center p-1 m-1 rounded-3xl w-28">Next Page</button>
      </div>
    </div>
  );
}
export default Movies;
