import { createContext, useState, type Dispatch } from "react";
import { Link, Outlet } from "react-router";
import type { Player } from "../types/player.ts";

type PlayersContextType = {
  data: Player[];
  setData: Dispatch<React.SetStateAction<Player[]>>;
};
export const PlayersContext = createContext<PlayersContextType | undefined>(undefined);
const Home = () => {
  const [data, setData] = useState<Player[]>([]);
  return (
    <>
      <PlayersContext value={{ data, setData }}>
        <nav className="navmenu">
          <Link to="/view-player">All Players</Link>
          <Link to="/add-player">Add player</Link>
        </nav>
        <Outlet />
      </PlayersContext>
    </>
  );
};

export default Home;
