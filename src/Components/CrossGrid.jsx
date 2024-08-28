import React, { useState, useEffect } from 'react';

const CrossGrid = () => {
    const grid = [
        ['F', 'O', 'R', 'X', 'G', 'I', 'Q', 'K', 'M', 'C'],
        ['A', 'N', 'J', 'S', 'W', 'I', 'T', 'C', 'H', 'F'],
        ['S', 'V', 'E', 'C', 'D', 'O', 'N', 'M', 'U', 'O'],
        ['T', 'A', 'L', 'T', 'U', 'Z', 'V', 'N', 'T', 'K'],
        ['A', 'R', 'P', 'N', 'L', 'E', 'C', 'S', 'A', 'R'],
        ['T', 'I', 'U', 'T', 'C', 'T', 'O', 'E', 'F', 'G'],
        ['I', 'A', 'T', 'A', 'I', 'E', 'R', 'A', 'Q', 'S'],
        ['C', 'B', 'E', 'O', 'K', 'B', 'D', 'M', 'E', 'E'],
        ['O', 'L', 'N', 'O', 'N', 'T', 'I', 'N', 'U', 'T'],
        ['R', 'E', 'T', 'U', 'R', 'N', 'U', 'K', 'X', 'S'],
    ];

    const wordsToFind = ['FOR', 'SWITCH', 'BREAK',  'RETURN','SETS','FUNCTION','STATIC','TUPLE','VARIABLE'];
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [highlightedCells, setHighlightedCells] = useState([]);
    const [incorrectCells, setIncorrectCells] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (selectedCells.length > 0) {
            setErrorMessage('');
        }
    }, [selectedCells]);

    useEffect(() => {
        if (incorrectCells.length > 0) {
            const timer = setTimeout(() => {
                setIncorrectCells([]);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [incorrectCells]);

    const isAdjacent = (rowIndex, colIndex) => {
        if (selectedCells.length === 0) return true;

        const [lastRow, lastCol] = selectedCells[selectedCells.length - 1];
        const rowDiff = Math.abs(lastRow - rowIndex);
        const colDiff = Math.abs(lastCol - colIndex);
        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 1);
    };

    const checkWordCompletion = () => {
        const selectedWord = selectedCells.map(([r, c]) => grid[r][c]).join('');
        if (wordsToFind.includes(selectedWord)) {
            setFoundWords([...foundWords, selectedWord]);
            setHighlightedCells(prevHighlighted => [...prevHighlighted, ...selectedCells]); 
            setSelectedCells([]); 
            setErrorMessage(''); 
        } else {
            setErrorMessage('Incorrect word!'); 
            setIncorrectCells(selectedCells); 
            setSelectedCells([]); 
        }
    };

    const handleClick = (rowIndex, colIndex) => {
        if (isAdjacent(rowIndex, colIndex)) {
            setSelectedCells(prevSelected => [...prevSelected, [rowIndex, colIndex]]);
        } else {
            setSelectedCells([]); 
        }
    };

    const handleValidate = () => {
        checkWordCompletion();
    };

    const isCellHighlighted = (rowIndex, colIndex) => {
        return highlightedCells.some(([r, c]) => r === rowIndex && c === colIndex);
    };

    const isCellIncorrect = (rowIndex, colIndex) => {
        return incorrectCells.some(([r, c]) => r === rowIndex && c === colIndex);
    };

    return (
        <div className='flex flex-row justify-between mx-20'>
            <div>
            <div className='grid grid-cols-10 bg-gray-100 border-4 border-violet-500 rounded-lg overflow-hidden shadow-lg' style={{ width: '500px', height: '500px' }}>
                {grid.map((row, rowIndex) => (
                    row.map((col, colIndex) => {
                        const isSelected = selectedCells.some(([r, c]) => r === rowIndex && c === colIndex);
                        const isHighlighted = isCellHighlighted(rowIndex, colIndex);
                        const isIncorrect = isCellIncorrect(rowIndex, colIndex);
                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`flex items-center justify-center text-lg font-semibold cursor-pointer text-gray-950 border border-gray-400 ${isHighlighted ? 'bg-green-300' : isIncorrect ? 'bg-red-300' : isSelected ? 'bg-blue-300' : 'hover:bg-violet-200'} transition-colors`}
                                style={{ width: '100%', height: '100%' }}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            >
                                {col}
                            </div>
                        )
                    })
                ))}
            </div>
            <div className="mt-4">
                <button onClick={handleValidate} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex ml-[180px]">Validate Word</button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
               <div className='flex justify-center flex-col gap-2'>
               <h2 className="text-lg font-bold mt-4 flex justify-center">Words Found:</h2>
                <div class="grid grid-cols-3  ">
                {foundWords.map((word, index) => (
                        <li key={index} >{word}</li>
                    ))}
                </div>
               </div>

            </div>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-bold'>Questions:- </p>
                    <p>1)To remove duplicate elements from a list in Python, you can convert it to a_______</p>
                    <p>2)To iterate over each item in a list and perform an action on each item, you use a _________ loop in Python.</p>
                    <p>3)To handle multiple cases based on a variable's value, use a _________ statement.</p>
                    <p>4)To reuse code for specific tasks, define a _________.</p>
                    <p>5)To send a value back from a function, use the _________ statement.</p>
                    <p>6)To create a class-level variable or method in Java, use the _________ keyword.</p>
                    <p>7)In Java, to exit from a loop prematurely, you use the _________ statement.</p>
                    <p>8)In Python, an immutable sequence of elements that can be used to store multiple items is called a _________.</p>
                    <p>9)In Python, a name used to store and refer to a value is called a _________.</p>
            </div>
        </div>
    );
};

export default CrossGrid;
