import express from "express"
import { addPlayer, deletePlyer, getAllPlayer } from "../controllers/player.controller.js";

const Playerrouter = express.Router();

Playerrouter.get('/', getAllPlayer);
Playerrouter.post('/add-player', addPlayer);
Playerrouter.delete('/delete-player', deletePlyer);

export default Playerrouter;