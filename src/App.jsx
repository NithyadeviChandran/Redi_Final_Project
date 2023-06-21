import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";


function App() {
  const [children, setChildren] = useState()
  const [users, setUsers] = useState();
  const [Calendar, setCalendar] = useState()
  
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
      {/* {users && users.map(i=> <p>{i.name}</p>)} */}
      <Routes>
        <Route
          path="/"
          element={
            <Home users={users} setUsers={setUsers} />
          }
        />
        <Route path="/profile" element={<Profile users={users}  children={children} setChildren={setChildren} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Main users={users} children={children} setChildren={setChildren} Calendar={Calendar} setCalendar={setCalendar}/>} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
