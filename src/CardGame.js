import { Client } from 'boardgame.io/react'
import { NewGame } from './NewGame'
import Battle from './Battle'

const CardGame = Client({ game: NewGame, board: Battle, numPlayers: 2, debug: true })

export default CardGame
