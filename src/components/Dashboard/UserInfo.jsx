import { genreNames } from "../../utils/genreNames";
import profileImg from "../../assets/image15.png"

function UserInfo() {
  // Write code to set uuser info like name , username , email & 
  // selected genere name in localstorage and  get them here to show inside the profile section
  const user = JSON.parse(localStorage.getItem("formData"));
  return (
    <div className="flex text-white bg-[#5746EA] h-40 rounded-2xl">
        <img className="w-32 object-contain p-2" src={profileImg} alt="profile" />
      <div>
        <div className="font-thin m-2">
          <p className="trext-xs">{user.name}</p>
          <p className="trext-xs">{user.email}</p>
          <p className="font-bold text-xl">{user.username}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center">
          {genreNames.map((genre) => {
            return <p key={genre.id} className="rounded-xl bg-purple-300 text-center px-1 text-xs">{genre.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
