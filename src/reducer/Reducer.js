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
            const {piece,file,rank,candidateMoves} = action.payload
            return {
                ...state,
                selectedPiece: {piece,file,rank},
                candidateMoves
            }
        } 

        case actionType.CLEAR_CANDIDATE_MOVES : {
            return {
                ...state,
                selectedPiece : {},
                candidateMoves : []
            }
        }

        default : 
            return state   }
        };