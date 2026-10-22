import { useState } from "react";
import axios from "axios";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [matches, setMatches] = useState("");
  const [runs, setRuns] = useState("");
  const [hundreds, setHundreds] = useState("");
  const [fifties, setFifties] = useState("");
  const [team, setTeam] = useState("");

  const handleAddPlayer = async () => {
    const playerData = {
      name,
      matches: Number(matches),
      runs: Number(runs),
      hundreds: Number(hundreds),
      fities: Number(fifties),
      team,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/add-player",
        playerData,
      );
      console.log(response.data);
      alert("Added Player");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="w-100 m-auto">
      <h2>Add Player</h2>
      <fieldset className="fieldset m-2">
        <legend className="fieldset-legend">Player name?</legend>
        <input
          type="text"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <legend className="fieldset-legend">matches Played?</legend>
        <input
          type="number"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setMatches(e.target.value)}
          value={matches}
        />

        <legend className="fieldset-legend">runs scored?</legend>
        <input
          type="number"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setRuns(e.target.value)}
          value={runs}
        />

        <legend className="fieldset-legend">Hundreds?</legend>
        <input
          type="number"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setHundreds(e.target.value)}
          value={hundreds}
        />

        <legend className="fieldset-legend">Fifties?</legend>
        <input
          type="number"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setFifties(e.target.value)}
          value={fifties}
        />

        <legend className="fieldset-legend">team?</legend>
        <input
          type="text"
          className="input inline-block w-full"
          placeholder="Type here"
          onChange={(e) => setTeam(e.target.value)}
          value={team}
        />

        <button className="btn btn-info m-2" onClick={handleAddPlayer}>
          Add
        </button>
      </fieldset>
    </div>
  );
};

export default AddPlayer;
