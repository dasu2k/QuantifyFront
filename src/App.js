import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Exercise from './Components/Exercise';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='food' Component={Food}/>
            <Route path='exercise' Component={Exercise}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
