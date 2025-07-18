import { getData } from "../data/get-data"
import { GameTransferModel } from "../models/game-transfer-model"
import { StatusCode } from "../utils/status-code"

export const serviceListGames = async (): Promise<GameTransferModel> => {
  const data = await getData()

  return {
    statusCode: data.length > 0 ? StatusCode.Accepted : StatusCode.NoContent,
    data 
  }
}