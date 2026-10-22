import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'players_db'
})

export default pool;