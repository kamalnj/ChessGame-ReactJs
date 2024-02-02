import { createPosition } from "./components/Board/Helper"

export const initGameState = {
    position : [createPosition()],
    turn : 'w',
    candidateMoves:[]
}