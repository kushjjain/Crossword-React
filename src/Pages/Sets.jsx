import React from 'react'
import CrossGrid from '../Components/CrossGrid'
import { useNavigate } from 'react-router-dom';

function Sets() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    
    navigate('/Iteration');
  };

const grid = [
  ['A', 'P', 'P', 'E', 'N', 'D', 'Q', 'K', 'M', 'C'],
  ['R', 'N', 'J', 'S', 'W', 'I', 'T', 'G', 'E', 'T'],
  ['E', 'V', 'E', 'C', 'D', 'O', 'N', 'M', 'U', 'O'],
  ['M', 'A', 'L', 'T', 'U', 'Z', 'V', 'N', 'T', 'K'],
  ['O', 'R', 'P', 'N', 'L', 'E', 'C', 'S', 'A', 'R'],
  ['V', 'I', 'U', 'T', 'C', 'O', 'U', 'N', 'T', 'G'],
  ['E', 'A', 'T', 'A', 'D', 'D', 'R', 'A', 'Q', 'S'],
  ['C', 'H', 'A', 'N', 'G', 'E', 'D', 'M', 'E', 'E'],
  ['O', 'L', 'N', 'O', 'N', 'T', 'I', 'N', 'U', 'T'],
  ['R', 'E', 'T', 'U', 'I', 'N', 'D', 'E', 'X', 'S'],
];

const questions = [
  " To add an item to the end of a list, you use the _______ method .",
  "The _______ method removes the first occurrence of a specified element from a list.",
  "To get the position of a specific item in a list, you use the _______ method.",
  "The _______ method returns the number of times a specified element appears in a tuple.",
  "Tuples are similar to lists, but they are immutable, meaning they cannot be _______ after creation.",
  "The _______ method in a dictionary returns the value associated with a specified key",
  "The _______ method adds an element to a set if it is not already present"

  
];
const wordsToFind = ['APPEND','REMOVE', 'INDEX',  'COUNT','CHANGED','GET','ADD'];
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

export default Sets