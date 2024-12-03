import './App.css';
import { Routes,Route } from 'react-router-dom';
import Movies from './components/Movies';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
    </div>
  );
}

export default App;
