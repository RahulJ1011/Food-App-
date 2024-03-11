
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/recipe/:id' element={<Details />} />
     </Routes>
    </div>
  );
}

export default App;
