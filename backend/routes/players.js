import express from "express"
import { addPlayer, deletePlyer, getAllPlayer, updatePlayerName } from "../controllers/player.controller.js";

const Playerrouter = express.Router();

Playerrouter.get('/', getAllPlayer);
Playerrouter.post('/add-player', addPlayer);
Playerrouter.delete('/delete-player', deletePlyer);
Playerrouter.put('/update-player', updatePlayerName);

export default Playerrouter;