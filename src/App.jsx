import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import AuthProvider from './services/AuthContext';
import PrivateRoute from './services/PrivateRoute';
import ShowBook from './pages/ShowBook';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar className="navbar" />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addbook" element={<PrivateRoute><AddBook /></PrivateRoute>} />
              <Route path="/editbook/:id" element={<PrivateRoute><EditBook /></PrivateRoute>} />
              <Route path="/showbook/:id" element={<ShowBook />} />
            </Routes>
          </div>
          <Footer className="footer" />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;