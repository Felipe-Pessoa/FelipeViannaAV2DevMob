/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/
import axios from "axios";

class RankingService {
  async getRanking() {
    const url = "https://devmob-backend.herokuapp.com/players";

    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default new RankingService();