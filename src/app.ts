import * as http from 'http'
import { HttpMethods } from "./utils/http-methods";
import { Routes } from './routes/routes';
import { getAllGames, getFilteredGamesByCategory } from './controllers/games-controller';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const baseUrl = req.url?.split('?')[0]
  
  if(req.method === HttpMethods.GET && baseUrl === Routes.DEFAULT) {
    await getAllGames(req, res)
  }

  if(req.method === HttpMethods.GET && baseUrl === Routes.CATEGORY) {
    await getFilteredGamesByCategory(req, res)
  }
}

