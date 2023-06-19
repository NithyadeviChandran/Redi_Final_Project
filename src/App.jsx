import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import data from './data.json'

import {useState} from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(data.users)

  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ='/profile' element={<Profile user={user}/>} />
        <Route path="calendar" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
