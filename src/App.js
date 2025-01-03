import './App.css';
import { Routes,Route } from 'react-router-dom';
import Movies from './components/Movies';
import Users from './components/Users';
import Products from './components/Products';
import Info from './components/Info';
import Album from './components/Album';
import Comments from './components/Comments';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/album" element={<Album/>}/>
          <Route path='/comments' element={<Comments/>}/>
        </Routes>
    </div>
  );
}

export default App;
