
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import AddNewBlog from './pages/add-blog'

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add-blog' element={<AddNewBlog />} />
      </Routes>
    </div>
  )
}

export default App
