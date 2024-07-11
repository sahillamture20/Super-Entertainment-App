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
    <div
      className={`flex flex-col p-1 m-1 w-36 h-32 rounded-xl ${
        selectedMovies.includes(data.id) ? 'outline outline-customGreen' : ''
      } box-border`}
      style={{
        backgroundColor: data.bgColor,
      }}
      onClick={handleSelectionChange}
    >
      <p className="text-white pb-2 text-xl">{data.name}</p>
      <img src={data.img} alt="image" className="object-cover" />
    </div>
  );
}

export default Box;
