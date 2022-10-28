const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FinalProject1",
  password: "Trian1505",
  port: 5432,
});

module.exports = pool;