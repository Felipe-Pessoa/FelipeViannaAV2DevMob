/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/
CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) UNIQUE,
      score INTEGER
    )