import { Notes, News, UserInfo, Clock, Weather } from "../components";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden p-8">
      <div className="flex gap-6">
        {/* Left Section: Profile, Weather, Notes, and Clock */}
        <div className="flex flex-col w-8/12 gap-6 p-3 h-full">
          <div className="flex flex-1 gap-8">
            <div className="flex flex-col w-96 gap-6">
              <UserInfo />
              <Weather />
            </div>
            <div className="flex flex-1">
              <Notes />
            </div>
          </div>
          <div className="flex flex-1">
            <Clock />
          </div>
        </div>
        {/* Right Section: News */}
        <div className="flex flex-1 h-full">
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
