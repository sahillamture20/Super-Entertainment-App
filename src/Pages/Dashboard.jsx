import { Notes, News, UserInfo, Clock, Weather } from "../components";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden p-3">
      <div className="flex">
        {/* Left Section: Profile, Weather, Notes, and Clock */}
        <div className="flex flex-col w-8/12 gap-2 p-3">
          <div className="flex flex-1 gap-3">
            <div className="flex flex-col w-96 gap-2">
              <UserInfo />
              <Weather />
            </div>
            <div className="flex flex-1">
              <Notes />
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <Clock />
          </div>
        </div>
        {/* Right Section: News */}
        <div className="flex flex-1">
          <News />
        </div>
      </div>
      {/* Browse Button */}
      <div className="absolute bottom-5 right-5">
        <button
          onClick={() => navigate("/browse")}
          className="bg-customGreen text-white text-center rounded-2xl px-4"
        >
          Browse
        </button>
      </div>
    </div>
  );
}
