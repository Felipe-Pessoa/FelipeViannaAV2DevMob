/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import axios from "axios";

export class ScoreService {
  async saveScore(name, score) {
    const url = "https://devmob-backend.herokuapp.com/players/score";

    try {
      const { data } = await axios.post(url, {
        name,
        score,
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default new ScoreService();
