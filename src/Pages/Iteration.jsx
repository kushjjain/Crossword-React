import React from 'react'
import CrossGrid from '../Components/CrossGrid'
import { useNavigate } from 'react-router-dom';

function Iteration() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    
    navigate('/String');
  };

const grid = [
  ['A', 'P', 'P', 'R', 'N', 'D', 'C', 'K', 'M', 'C'],
  ['R', 'N', 'J', 'E', 'W', 'I', 'O', 'G', 'E', 'T'],
  ['E', 'D', 'E', 'C', 'D', 'O', 'N', 'M', 'U', 'O'],
  ['M', 'I', 'A', 'U', 'G', 'E', 'T', 'N', 'T', 'K'],
  ['O', 'V', 'P', 'R', 'L', 'E', 'I', 'S', 'A', 'R'],
  ['V', 'I', 'U', 'S', 'C', 'O', 'N', 'N', 'T', 'G'],
  ['E', 'D', 'T', 'I', 'D', 'D', 'U', 'A', 'Q', 'S'],
  ['C', 'E', 'A', 'V', 'G', 'E', 'E', 'M', 'E', 'E'],
  ['O', 'L', 'N', 'E', 'N', 'T', 'I', 'N', 'U', 'T'],
  ['B', 'R', 'E', 'A', 'K', 'N', 'B', 'A', 'S', 'E'],
];

const questions = [
  " In a for loop, the _______ keyword is used to stop the loop before it has iterated through all elements.",
  "The _______ keyword skips the current iteration of a loop and continues with the next iteration.",
  "The _______ method is used to iterate over a sequence of numbers within a specific range.",
  "A function that calls itself is known as a _______ function",
  "In a recursive function, the _______ condition is used to stop the recursion and return a result",
  "The process of breaking down a problem into smaller instances of the same problem is called _______ in recursion.",
 

  
];
const wordsToFind = ['BREAK', 'CONTINUE','RANGE',  'RECURSIVE','BASE','DIVIDE'];
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

export default Iteration