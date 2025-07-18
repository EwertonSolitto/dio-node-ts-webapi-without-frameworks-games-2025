import * as http from 'http'
import { serviceListGames } from '../services/service-list-games'
import { GameTransferModel } from '../models/game-transfer-model'
import { serviceFilteredGamesByCategory } from '../services/service-filtered-games-by-category';

const defaultContent = { "Content-Type": "application/json" };

export const getAllGames = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const content: GameTransferModel = await serviceListGames()

  res.writeHead(content.statusCode, defaultContent)
  res.write(JSON.stringify(content.data))
  res.end()
}

export const getFilteredGamesByCategory = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const content: GameTransferModel = await serviceFilteredGamesByCategory(req.url)

  res.writeHead(content.statusCode, defaultContent)
  res.write(JSON.stringify(content.data))
  res.end()
}