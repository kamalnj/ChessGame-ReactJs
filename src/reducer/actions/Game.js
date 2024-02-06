import actionType from "../actionType"


export const updateCastling = (direction) => {
    return {
        type: actionType.CAN_CASTLE,
        payload: direction,
    }
}