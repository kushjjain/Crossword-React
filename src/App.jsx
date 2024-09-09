import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sets from './Pages/Sets'
import Iteration from './Pages/Iteration'
import String from './Pages/String'
import Tkinter from './Pages/Tkinter'
import Walrus from './Pages/Walrus'


function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Sets/>}/>
          <Route path='/Iteration' element={<Iteration/>}/>
          <Route path='/String' element={<String/>}/>
          <Route path='/Tkinter' element={<Tkinter/>}/>
          <Route path='/Walrus' element={<Walrus/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
