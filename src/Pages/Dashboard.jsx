import { Notes, News, UserInfo, Clock, Weather } from "../components";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <p>Dashboard page</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <UserInfo />
          <Notes />
        </div>
        <div>
          <News />
          <Clock />
        </div>
        <Weather />
      </div>
      <button onClick={() => navigate("/browse")}>Next Page</button>
    </>
  );
}