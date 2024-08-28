import './App.css'
import CrossGrid from './Components/CrossGrid'

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

const questions = [
  " To remove duplicate elements from a list in Python, you can convert it to a _______.",
  " To iterate over each item in a list and perform an action on each item, you use a _________ loop in Python.",
  " To handle multiple cases based on a variable's value, use a _________ statement.",
  " To reuse code for specific tasks, define a _________.",
  " To send a value back from a function, use the _________ statement.",
  " To create a class-level variable or method in Java, use the _________ keyword.",
  " In Java, to exit from a loop prematurely, you use the _________ statement.",
  " In Python, an immutable sequence of elements that can be used to store multiple items is called a _________.",
  " In Python, a name used to store and refer to a value is called a _________."
];
const wordsToFind = ['SWITCH','FOR', 'BREAK',  'RETURN','SETS','FUNCTION','STATIC','TUPLE','VARIABLE'];
function App() {

  return (
    <>
    <h1 className="text-red-500 font-bold text-3xl mx-20 my-2">
      Crossword Game
    </h1>
    <CrossGrid grid={grid} questions={questions} wordsToFind={wordsToFind}/> 
    </>
  )
}

export default App
