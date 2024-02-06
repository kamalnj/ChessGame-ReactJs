import { Status } from "../Constant";
import actionType from "./actionType"
export const reducer = (state, action) => {

    switch (action.type) {
        case actionType.NEW_MOVE : {
            let {position,turn} = state 
            position = [
                ...position,
                action.payload.newPosition
            ]
            
            turn = turn === 'w' ? 'b' : 'w'

            return {
                ...state,
                position,
                turn,
            }
        }

        case actionType.GENERATE_CANDIDATE_MOVES : {
            const {candidateMoves} = action.payload
            return {
                ...state,
                candidateMoves
            }
        } 

        case actionType.CLEAR_CANDIDATE_MOVES : {
            return {
                ...state,
                candidateMoves : []
            }
        }
    
        case actionType.PROMOTION_OPEN : {
            return {
                ...state,
                status : Status.promoting,
                promotionSquare : {...action.payload},
            }
        }

        case actionType.PROMOTION_CLOSE : {
            return {
                ...state,
                status : Status.ongoing,
                promotionSquare : null,
            }
        }
        case actionType.CAN_CASTLE : {
            let {turn,castleDirection} = state 

            castleDirection[turn] = action.payload

            return {
                ...state,
                castleDirection,
            }
        }
        default : 
            return state
    }
};