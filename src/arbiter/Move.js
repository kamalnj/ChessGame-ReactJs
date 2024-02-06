import { copyPosition } from "../components/Board/Helper"

export const movePiece = ({position,x,y,piece,rank,file}) =>{
       const newPosition = copyPosition(position)
    newPosition[rank][file] = ''
    newPosition[x][y] = piece
    return newPosition
}

export const movePawn = ({position,x,y,piece,rank,file}) =>{
    const newPosition = copyPosition(position)
    if(!newPosition[x][y] && x !== rank && y !== file)
    newPosition[rank][y] = ''
 newPosition[rank][file] = ''
 newPosition[x][y] = piece
 return newPosition
}