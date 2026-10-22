import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PlayersContext } from "./Home";
import type { Player } from "../types/player.ts";

const ViewPlayer = () => {
  const context = useContext(PlayersContext);
  const { data, setData } = context!;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get<Player[]>("http://localhost:4000/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h3>ViewPlayer</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Matches</th>
              <th>Run</th>
              <th>Hundreds</th>
              <th>Fifties</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.pid}>
                <td>{e.name}</td>
                <td>{e.matches}</td>
                <td>{e.runs}</td>
                <td>{e.hundreds}</td>
                <td>{e.fities}</td>
                <td>{e.Team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPlayer;
