/* eslint-disable react/prop-types */

function Box({ data, selectedMovies, setSelectedMovies }) {
  function handleSelectionChange() {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies(selectedMovies.filter((id) => id !== data.id));
    } else {
      setSelectedMovies([...selectedMovies, data.id]);
    }
  }

  return (
    <div className="flex flex-col p-1 m-1 w-40 h-36 rounded-xl"
      style={{
        border: selectedMovies.includes(data.id)
          ? "4px solid green"
          : "",
        backgroundColor: data.bgColor
      }}
      onClick={handleSelectionChange}
    >
      <p className="text-white">{data.name}</p>
      <img src={data.img} alt="image" />
    </div>
  );
}

export default Box;
