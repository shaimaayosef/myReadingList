import './App.css';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';



const App = () => {
  return (
    <div  className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addbook" element={<AddBook/>}/>
            <Route path="/editbook/:id" element={<EditBook/> }/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App