import { GameModel } from "./game-model"

export type GameTransferModel = {
  statusCode: number,
  data: GameModel[]
}