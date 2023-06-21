import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const [kids, setKids] = useState();

  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home user={user} setUser={setUser} kids={kids} setKids={setKids} />
          }
        />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Main user={user} />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
