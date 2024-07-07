/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { genreNames } from "../utils/genreNames";

const genreIds = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export default function Browse() {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  let requiredGenres = [];
  genreIds.forEach((genre) => {
    return genreNames.filter((data) => {
      if (data.name === genre.name) {
        requiredGenres.push(genre);
      }
    });
  });
  console.log(requiredGenres);

  useEffect(() => {
    if (requiredGenres.length > 0) {
      requiredGenres.map((genre) => {
        const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genre.id}&page=1`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "7a4b23f003msh5e2427c455fa21ep18631ejsn9999ddf27eb8",
            "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
          },
        };
        fetch(url, options)
          .then(async (response) => {
            const res = await response.json();
            setFetchedMovies((prevState) => {
                console.log(res)
              return [...prevState, ...res.results];
            });
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
          });
      });
    }
  }, []);

  console.log(fetchedMovies);
  console.log(typeof fetchedMovies);

  return (
    <p>
      Browse
      {requiredGenres.map((genre) => {
        return (
          <div key={genre.id}>
            <h2>{genre.name}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {fetchedMovies
                .filter((movie) => movie.genre_ids.includes(genre.id))
                .map((movie) => {
                  return (
                    <div
                      key={movie.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <h3>{movie.original_title}</h3>
                      <img
                        width={200}
                        height={200}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.original_title}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </p>
  );
}
