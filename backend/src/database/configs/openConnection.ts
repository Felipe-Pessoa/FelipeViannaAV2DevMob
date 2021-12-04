/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import sqlite3 from 'sqlite3';

const DATABASE_PATH = './src/database/game.sqlite';

function openConnection() {
  const db = new sqlite3.Database(DATABASE_PATH);
  db.serialize(() => {
    db.prepare(`CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) UNIQUE,
      score INTEGER
    )`).run().finalize();
  });
  return db;
}

export default openConnection;
