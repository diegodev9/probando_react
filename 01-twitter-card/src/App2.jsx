import { TwitterFollowCard } from "./components/TwitterFollowCard.jsx";
import "./css/App.css";
import data from "./data/data.json";

export function App2() {
  console.log(data);
  return (
    <div className={"App"}>
      {
        data.map(({userName, name, isFollowing}) => (
        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
        ))
      }
    </div>
  );
}
