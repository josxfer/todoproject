import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: 'localhost',
  user: 'postgres',
  password: 'ROOT',
  database: 'todoproject'
})

pool.on('connect', () => {
  console.log('Base de datos conectada');
})