/* eslint-disable react/prop-types */

function Chip({data, allData, selectedMovies, setSelectedMovies})
{
  const obj = allData.find((item) => item.id === data);
  function removeSelection() {
    setSelectedMovies(selectedMovies.filter(item => item !== data));
  }
  return (
    <div className="flex flex-row justify-evenly bg-customGreen text-white text-center p-1 m-1 rounded-3xl w-28">
      <p className="font-normal text-base">{obj.name}</p>
      <p onClick={removeSelection} className="text-customGray">X</p>
  </div>
  )
}

export default Chip