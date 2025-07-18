import fs from 'fs'
import path from 'path'

import { type GameModel } from '../models/game-model'

const pathData =  path.join(__dirname, '../data/games.json')

export const getData = async (categoryName?: string): Promise<GameModel[]> => {
  const language = 'utf-8'

  const rawData = fs.readFileSync(pathData, language)
  const jsonFile = JSON.parse(rawData)

  if(categoryName) {
    return jsonFile.filter((game: GameModel) => game.categories.filter((category) => category.toLowerCase().includes(categoryName)).length > 0 ? true : false)
  }

  return jsonFile
}