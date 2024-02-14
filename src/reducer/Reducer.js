import { Status } from "../Constant";
import actionType from "./actionType"
export const reducer = (state, action) => {

    switch (action.type) {
        case actionType.NEW_MOVE : {
            let {position,movesList,turn} = state 
            position = [
                ...position,
                action.payload.newPosition
            ]
            movesList = [
                ...movesList,
                action.payload.newMove
            ]
            
            turn = turn === 'w' ? 'b' : 'w'

            return {
                ...state,
                movesList,
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
        case actionType.WIN : {
            return {
                ...state,
                status : action.payload === 'w' ? Status.white : Status.black
            }
        }
        
        case actionType.TAKE_BACK : {
            let {position,movesList,turn} = state 
            if (position.length > 1){
                position = position.slice(0,position.length-1)
                movesList = movesList.slice(0,movesList.length-1)
                turn = turn === 'w' ? 'b' : 'w'
            }

            return {
                ...state,
                position,
                movesList,
                turn,
            }
        }
        case actionType.NEW_GAME : {
            return {
                ...action.payload,
            }
        }
        case actionType.STALEMATE : {
            return {
                ...state,
                status : Status.stalemate
            }
        }
        default : 
            return state
    }
};