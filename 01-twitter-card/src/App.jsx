import { TwitterFollowCard } from "./components/TwitterFollowCard.jsx";
import "./css/App.css";

export function App() {
  return (
    <div className={"App"}>
      <TwitterFollowCard userName={"goncy"} initialIsFollowing={false}>
        Gonzalo Pietro
      </TwitterFollowCard>
      <TwitterFollowCard userName={"ferrari"} initialIsFollowing>
        Enzo Ferrari
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing>
        Laura Mitchell
      </TwitterFollowCard>
    </div>
  );
}
