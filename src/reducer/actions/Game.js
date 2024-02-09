import actionType from "../actionType"
import { initGameState } from "../../Constant"


export const updateCastling = (direction) => {
    return {
        type: actionType.CAN_CASTLE,
        payload: direction,
    }
}
export const detectStalemate = () => {
    return {
        type: actionType.STALEMATE,
    }
}

export const detectInsufficientMaterial = () => {
    return {
        type: actionType.INSUFFICIENT_MATERIAL,
    }
}
export const setupNewGame = () => {
    return {
        type: actionType.NEW_GAME,
        payload : initGameState
    }
}