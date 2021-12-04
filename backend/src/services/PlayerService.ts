/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/
import { dbQuery } from '../database';
import { PlayerRequest } from './dto/player.request';
import { PlayerResponse } from './dto/player.response';

class PlayerService {
  private async getPlayer(name: string): Promise<PlayerResponse> {
    const player = await dbQuery('SELECT * FROM PLAYERS WHERE name = ?;', [name]);
    return player[0];
  }

  public async getRanking(): Promise<PlayerResponse[]> {
    const ranking = await dbQuery('SELECT * FROM PLAYERS ORDER BY score DESC LIMIT 5;') as PlayerResponse[];
    return ranking;
  }

  public async insertScore(data: PlayerRequest): Promise<PlayerResponse> {
    const checkPlayer = await this.getPlayer(data.name);
    if (!checkPlayer) {
      await dbQuery('INSERT INTO PLAYERS(name, score) VALUES (?, ?);', [data.name, data.score]);
      const registered = await this.getPlayer(data.name);
      return registered;
    }
    await dbQuery('UPDATE PLAYERS SET score = ? WHERE name = ?;', [data.score, data.name]);
    const scoreUpdated = await dbQuery('SELECT id, name, score FROM PLAYERS WHERE name = ?;', [data.name]);

    return scoreUpdated[0];
  }
}

export default new PlayerService();
