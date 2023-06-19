import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App min-h-screen">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='calendar' element={<Main/> }/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
