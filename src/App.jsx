import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import MortgageCalculator from './components/Pages/MortgageCalculator'
import Contact from './components/Pages/Contact'
import Home from "./components/Pages/Home"
import { ToDoWrapper } from "./components/ToDoWrapper"
import DarkModeToggle from "./components/DarkModeToggle"






function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/mortgagecalculator" element={<MortgageCalculator />}></Route>
          <Route path="/todowrapper" element={<ToDoWrapper />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/darkmode" element={<DarkModeToggle />}></Route>
       
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
