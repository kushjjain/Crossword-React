import React from 'react'
import CrossGrid from '../Components/CrossGrid'
import { useNavigate } from 'react-router-dom';

function Tkinter() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    
    navigate('/Walrus');
  };

const grid = [
  ['E', 'X', 'P', 'R', 'E', 'S', 'S', 'I', 'O', 'N'],
  ['W', 'C', 'O', 'M', 'P', 'A', 'R', 'E', 'E', 'E'],
  ['H', 'V', 'E', 'I', 'N', 'L', 'I', 'N', 'E', 'N'],
  ['I', 'A', 'L', 'L', 'T', 'Z', 'V', 'N', 'T', 'T'],
  ['L', 'T', 'A', 'R', 'T', 'S', 'W', 'I', 'T', 'R'],
  ['E', 'I', 'U', 'T', 'O', 'O', 'U', 'G', 'T', 'Y'],
  ['E', 'A', 'T', 'A', 'N', 'D', 'R', 'R', 'Q', 'F'],
  ['C', 'H', 'A', 'N', 'G', 'E', 'D', 'I', 'E', 'I'],
  ['O', 'L', 'N', 'O', 'S', 'T', 'R', 'D', 'P', 'N'],
  ['T', 'K', 'P', 'L', 'A', 'C', 'E', 'E', 'X', 'N'],
];

const questions = [
  "The walrus operator allows assignment within an ______, making the code more concise.",
  "The walrus operator can be used in a ______ loop to assign a value to a variable while checking a condition.",
  "In the statement if (n := len(lst)) > 5:, the variable ______ is assigned the length of the list lst.",
  "The walrus operator := is particularly useful in scenarios where you need to assign and ______ a value in the same expression.",
  "The walrus operator is a form of ______ assignment, which means you can assign a value as part of an expression.",
  "The walrus operator can be used in ______ comprehensions to both assign and filter values efficiently.",
 

  
];
const wordsToFind = ['EXPRESSION','WHILE', 'N',  'COMPARE','GRID','BUTTON'];
  return (
    <div>
    <h1 className="text-red-500 font-bold text-3xl mx-20 my-2">
  Crossword Game
</h1>
<CrossGrid grid={grid} questions={questions} wordsToFind={wordsToFind}/> 

<button className='p-3 px-5 bg-blue-500 text-white mx-[650px]' onClick={handleNavigation}>next</button>

</div>
  )
}

export default Tkinter