
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/cards' element={<Cards />}></Route>
          <Route exact path='/footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
