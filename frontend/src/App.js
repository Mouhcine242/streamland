import './App.css';
import Authentication from './components/Authentication';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Blogspage from './pages/Blogspage';
import Streampage from './pages/Streampage';


function App() {
  return (
    
  <Router>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route  path='/authentication' element={< Authentication />}></Route>
      <Route  path='/blogs' element={<Blogspage/>}></Route>
      <Route  path='/Streaming' element={<Streampage/>}></Route>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
