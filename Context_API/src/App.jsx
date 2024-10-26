import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/CartPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
