import React from 'react'
import CrossGrid from '../Components/CrossGrid'
import { useNavigate } from 'react-router-dom';

function Tkinter() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    
    navigate('/Walrus');
  };

const grid = [
  ['M', 'A', 'I', 'N', 'L', 'O', 'O', 'P', 'M', 'S'],
  ['F', 'L', 'A', 'B', 'B', 'L', 'I', 'T', 'E', 'E'],
  ['I', 'V', 'E', 'P', 'U', 'O', 'N', 'M', 'U', 'N'],
  ['N', 'A', 'L', 'L', 'T', 'Z', 'V', 'N', 'T', 'T'],
  ['S', 'T', 'A', 'R', 'T', 'S', 'W', 'I', 'T', 'R'],
  ['V', 'I', 'U', 'T', 'O', 'O', 'U', 'G', 'T', 'Y'],
  ['E', 'A', 'T', 'A', 'N', 'D', 'R', 'R', 'Q', 'F'],
  ['C', 'H', 'A', 'N', 'G', 'E', 'D', 'I', 'E', 'I'],
  ['O', 'L', 'N', 'O', 'S', 'T', 'R', 'D', 'P', 'N'],
  ['T', 'K', 'P', 'L', 'A', 'C', 'E', 'E', 'X', 'D'],
];

const questions = [
  "The main window in a Tkinter application is created using the ______ class.",
  "To add a label to a window, we use the ______ widget.",
  "The method used to enter the Tkinter event loop is ______..",
  "In Tkinter, the widget used to accept user input through a text field is ______",
  "To organize widgets in a grid, the method ______ is used.",
  "The Tkinter widget used to display clickable buttons is ______.",
 

  
];
const wordsToFind = ['TK','LABEL', 'MAINLOOP',  'ENTRY','GRID','BUTTON'];
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