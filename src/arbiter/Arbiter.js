import { getBishopMoves, getKnightMoves, getRookMoves } from './GetMoves'

const arbiter = {

    getRegularMoves : function ({position,piece,rank,file}) {
        if(piece.endsWith('n'))
        return getKnightMoves({position,rank,file});

        if(piece.endsWith('b'))
        return getBishopMoves({position,piece,rank,file});

        if(piece.endsWith('r'))
        return getRookMoves({position,piece,rank,file});
    },



}


export default arbiter