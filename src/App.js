// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home/Home';
// import '../node_modules/bootstrap/js/dist/*js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
