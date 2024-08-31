import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sets from './Pages/Sets'
import Iteration from './Pages/Iteration'
import String from './Pages/String'


function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Sets/>}/>
          <Route path='/Iteration' element={<Iteration/>}/>
          <Route path='/String' element={<String/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
