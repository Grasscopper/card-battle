import { Client } from 'boardgame.io/react'
import { NewGame } from './NewGame'
import Battle from './Battle'

const CardGame = Client({ game: NewGame, board: Battle, numPlayers: 2, debug: false })

export default CardGame
