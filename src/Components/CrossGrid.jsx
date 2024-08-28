import React, { useState, useEffect } from 'react';

const CrossGrid = ({ grid, questions, wordsToFind }) => {
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [highlightedCells, setHighlightedCells] = useState([]);
    const [incorrectCells, setIncorrectCells] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [highlightedQuestions, setHighlightedQuestions] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

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

    useEffect(() => {
        if (highlightedQuestions.length === questions.length) {
            setIsFinished(true);
        }

    }, [highlightedQuestions, questions.length])

    const isAdjacent = (rowIndex, colIndex) => {
        if (selectedCells.length === 0) return true;

        const [lastRow, lastCol] = selectedCells[selectedCells.length - 1];
        const rowDiff = Math.abs(lastRow - rowIndex);
        const colDiff = Math.abs(lastCol - colIndex);
        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 1);
    };

    const checkWordCompletion = () => {
        const selectedWord = selectedCells.map(([r, c]) => grid[r][c]).join('');
        const wordIndex = wordsToFind.indexOf(selectedWord);
        if (wordIndex !== -1) {
            setFoundWords([...foundWords, selectedWord]);
            setHighlightedCells(prevHighlighted => [...prevHighlighted, ...selectedCells]);
            setSelectedCells([]);
            setErrorMessage('');
            setHighlightedQuestions(prevQuestions => [...prevQuestions, wordIndex])
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
        <div className='flex flex-col items-center'>
            {isFinished && (
                <p className="text-violet-600 text-xl font-bold mb-4">
                    Congratulations! You've answered all the questions!
                </p>
            )}
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
                <div className='flex flex-col gap-5 ml-10'>
                    <p className='text-[30px] font-bold'>Questions:- </p>
                    {questions.map((question, index) => (
                        <p key={index} className={`${highlightedQuestions.includes(index) ? 'text-green-600' : ''}`}
                        >{index + 1}) {question}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CrossGrid;