import { getData } from "../data/get-data"
import { GameTransferModel } from "../models/game-transfer-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilteredGamesByCategory = async (url: string | undefined): Promise<GameTransferModel> => {
  const queryUrl = url?.split("?c=")[1]
  const data = await getData(queryUrl)

  return {
    statusCode: data.length > 0 ? StatusCode.Accepted : StatusCode.NoContent,
    data 
  }
}