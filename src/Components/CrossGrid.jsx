import React from 'react'
import { useState } from 'react';

const CrossGrid = () => {
    const grid = [
        ['F', 'O', 'R', 'X', 'G', 'I', 'Q', 'K', 'M', 'C'],
        ['A', 'N', 'J', 'W', 'H', 'I', 'L', 'E', 'K', 'I'],
        ['Z', 'R', 'E', 'C', 'D', 'O', 'N', 'M', 'P', 'O'],
        ['I', 'F', 'V', 'T', 'U', 'Z', 'V', 'B', 'T', 'E'],
        ['S', 'Y', 'A', 'N', 'L', 'E', 'L', 'S', 'E', 'R'],
        ['S', 'W', 'I', 'T', 'C', 'H', 'O', 'J', 'F', 'G'],
        ['D', 'R', 'C', 'A', 'S', 'E', 'L', 'A', 'Q', 'F'],
        ['B', 'R', 'E', 'A', 'K', 'C', 'D', 'M', 'E', 'F'],
        ['O', 'T', 'C', 'O', 'N', 'T', 'I', 'N', 'U', 'E'],
        ['R', 'E', 'T', 'U', 'R', 'N', 'U', 'K', 'X', 'Y'],
      ];
    const [selectedCells,setSelectedCells] = useState([]);

    const isAdjacent = (rowIndex,colIndex) => {
        if(selectedCells.length === 0) return true;

        const [lastRow,lastCol] = selectedCells[selectedCells.length - 1] 
        const rowDiff = Math.abs(lastRow - rowIndex)
        const colDiff = Math.abs(lastCol - colIndex)
        return (rowDiff ===1 && colDiff ===0) || (rowDiff === 0 && colDiff===1) || (rowDiff === 1 && colDiff=== 1);
    }

    const handleClick = (rowIndex,colIndex) => {
        if(isAdjacent(rowIndex,colIndex)){
            setSelectedCells([...selectedCells,[rowIndex,colIndex]]);
        }
        else{
            setSelectedCells([]);
        }
    }

  return (
    <div className='grid grid-cols-10 bg-gray-100 border-4 border-violet-500 rounded-lg overflow-hidden shadow-lg' style={{width:'500px', height:'500px'}}>
        {grid.map((row,rowIndex) => (
            row.map((col,colIndex) => {
                const isSelected = selectedCells.some(([r, c]) => r === rowIndex && c === colIndex);
                return(
                <div
                key = {`${rowIndex} - ${colIndex}`}
                className = { `flex items-center justify-center text-lg font-semibold cursor-pointer text-gray-950 bg-white border border-gray-400 ${isSelected ? 'bg-violet-300' : 'hover:bg-violet-200'}  transition-colors`}
                style={{width:'100%',height:'100%'}}
                onClick={() => handleClick(rowIndex,colIndex)}>
                    {col}    
                </div> 
                )   
            })
        ))}
    </div>
  )
}

export default CrossGrid;