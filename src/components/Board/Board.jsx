import './Board.css'
import React from 'react'
import Files from './bits/Files'
import Ranks from './bits/Ranks'



const Board = () =>{
    const getClassName = (i,j) =>{
     let c ='tile'
     c+= (i+j) % 2 === 0 ? ' tile--light' : ' tile--dark'
     return c
    }
    
    
    const ranks = Array(8).fill().map((x,i)=>8-i)
    const files = Array(8).fill().map((x,i)=>String.fromCharCode(i + 97))

    return (
        <div className='board'>
        <Ranks ranks={ranks}/>

           <div className='tiles'>
                {ranks.map((rank,i)=>
                files.map((file,j)=>
                <div key={file+'-'+rank} className={getClassName(i,j)}></div>
                ))
            }
           </div>
           <Files files={files}/>
        </div>
    )
}
export default Board