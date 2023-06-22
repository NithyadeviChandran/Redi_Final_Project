import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Childpage from "./components/Childpage";


function App() {
  const [children, setChildren] = useState()
  const [users, setUsers] = useState();
  const [Calendar, setCalendar] = useState()
  const [event, setEvent] = useState()
  const [newuser, setNewUser] = useState()
  const [user, setUser] = useState()
  const [child, setChild] = useState()
  const [child1, setChild1] = useState()
 
 
  
  useEffect(()=>{
      // api calls goes here
    axios("https://nithya-render.onrender.com/users")
    .then(i=>setUsers(i.data))
    .catch(i=> console.log(i))
    axios("https://nithya-render.onrender.com/children")
    .then(i=>setChildren(i.data))
    .catch(i=> console.log(i))
    axios("https://nithya-render.onrender.com/Calendar")
    .then(i=>setCalendar(i.data))
    .catch(i=> console.log(i))
  },[])


  return (
    <>
    <div className="App min-h-screen">
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} setUser={setUser} /> } />
        <Route path="/profile" element={<Profile user={user} children={children} child={child} setChild={setChild} setChild1={setChild1}/>} />
        <Route path="/childpage" element={<Childpage child={child} child1={child1} setChild1={setChild1}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Main Calendar={Calendar} event={event} setEvent={setEvent}child1={child1} setChild1={setChild1} />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
