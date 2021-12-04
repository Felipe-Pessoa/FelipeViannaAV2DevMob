/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import { Request, Response } from 'express';
import { PlayerRequest } from '../services/dto/player.request';
import PlayerService from '../services/PlayerService';

class PlayerController {
  public async saveScore(req: Request, res: Response) {
    const request: PlayerRequest = req.body;
    const response = await PlayerService.insertScore(request);

    return res.status(201).json(response);
  }

  public async ranking(req: Request, res: Response) {
    const response = await PlayerService.getRanking();

    return res.status(200).json(response);
  }
}

export default new PlayerController();
