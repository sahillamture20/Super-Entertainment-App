/* eslint-disable react/prop-types */

function Box({ data, selectedMovies, setSelectedMovies }) {
  function handleSelectionChange() {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies(selectedMovies.filter((id) => id !== data.id));
    } else {
      setSelectedMovies([...selectedMovies, data.id]);
    }
  }
  console.log(selectedMovies);
  return (
    <div
      style={{
        border: selectedMovies.includes(data.id)
          ? "2px solid green"
          : "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: selectedMovies.includes(data.id) ? 'lightgreen' : 'white'
      }}
      onClick={handleSelectionChange}
    >
      {data.name}
    </div>
  );
}

export default Box;
