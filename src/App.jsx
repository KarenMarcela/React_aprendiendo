import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Componente
import Saludar from './playground/Component'
import HomeHooks from './playground/HomeHooks'
import HookUseState from './playground/HookUseState'
import HookUseNavigate from './playground/HookUseNavigate' 

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks/>}></Route>
        <Route path='/saludar' element={<Saludar/>}></Route>
        <Route path='/usestate' element={<HookUseState/>}></Route>
        <Route path='/usenavigate' element={<HookUseNavigate/>}></Route> 

      </Routes>
    </BrowserRouter>
  )
}

export default App
