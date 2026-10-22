import pool from "../db/pool.js";

export const addPlayer = async (req, res) => {
    const { name, matches, runs, fities, hundreds, team } = req.body;
    const sql = 'INSERT INTO players(name,matches,runs,fities,hundreds,Team) VALUES (?,?,?,?,?,?)';
    try {
        const data = await pool.query(sql, [name, matches, runs, fities, hundreds, team]);
        res.send(data[0]);
    } catch (error) {
        res.send(error);
    }
}

export const getAllPlayer = async (req, res) => {
    const sql = 'SELECT * FROM players';
    try {
        const data = await pool.query(sql);
        res.send(data[0]);
    } catch (error) {
        res.send(error);
    }
}

export const deletePlyer = async (req, res) => {
    const { pid } = req.body;
    const sql = 'DELETE FROM players WHERE pid = ?';
    try {
        const data = await pool.query(sql, [pid]);
        res.send(data[0]);
    } catch (error) {
        res.send(error);
    }
}

export const updatePlayerName = async (req, res) => {
    const { pid, name } = req.body;
    const sql = 'UPDATE players SET name = ? WHERE pid = ?';
    
    try {
        const data = await pool.query(sql, [name, pid]);
        res.send(data[0]);
    } catch (error) {
        res.send(error);
    }
}