import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App min-h-screen">
      <Nav/>
      <Home/>
      {/* <Main/> */}
      <Footer/>
    </div>

  );
}

export default App;
