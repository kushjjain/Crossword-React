import React from 'react'
import CrossGrid from '../Components/CrossGrid'
import { useNavigate } from 'react-router-dom';

function String() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    
    navigate('/Tkinter');
  };

const grid = [
  ['U', 'P', 'P', 'E', 'R', 'D', 'Q', 'K', 'M', 'S'],
  ['F', 'N', 'J', 'S', 'P', 'L', 'I', 'T', 'E', 'T'],
  ['I', 'V', 'E', 'P', 'D', 'O', 'N', 'M', 'U', 'R'],
  ['N', 'A', 'L', 'L', 'U', 'Z', 'V', 'N', 'T', 'I'],
  ['S', 'T', 'A', 'R', 'T', 'S', 'W', 'I', 'T', 'H'],
  ['V', 'I', 'U', 'T', 'C', 'O', 'U', 'N', 'T', 'G'],
  ['E', 'A', 'T', 'A', 'D', 'D', 'R', 'A', 'Q', 'F'],
  ['C', 'H', 'A', 'N', 'G', 'E', 'D', 'M', 'E', 'I'],
  ['O', 'L', 'N', 'O', 'S', 'T', 'R', 'I', 'P', 'N'],
  ['R', 'E', 'P', 'L', 'A', 'C', 'E', 'E', 'X', 'D'],
];

const questions = [
  "To convert all characters in a string to uppercase, you use the _______ method.",
  "The _______ method removes any leading and trailing whitespace from a string.",
  "To replace all occurrences of a substring with another substring, you use the _______ method.",
  "To split a string into a list based on a specified delimiter, you use the _______ method.",
  "The _______ method returns the index of the first occurrence of a specified substring.",
  "To check if a string starts with a specific substring, you use the _______ method.",
  "The _______ method returns the number of occurrences of a specified substring in the string."

  
];
const wordsToFind = ['UPPER','STRIP', 'REPLACE',  'SPLIT','FIND','STARTSWITH','COUNT'];
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

export default String