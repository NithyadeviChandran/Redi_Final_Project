import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home({ users, setUser }) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const person = users && users.find((i) => i.email === email);
    // console.log(person.name)
    if (person) {
      if (person.password == password) {
        console.log("you can login");
        setUser(person);
        navigate("/profile");
      } else {
        console.log("password is wrong");
      }
    } else {
      console.log("person not found");
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-info">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Year Book 2023</h1>
            <p className="font-sans py-24 md:font-italic">
              Beautiful Memories are like Old friends. Create one for your Child!They may not always be on
              your mind, but they are forever in your local storage!
            </p>
            <button
              className="btn btn-primary"
              onClick={() => window.my_modal_2.showModal()}
            >
              Get Started
            </button>
            <dialog id="my_modal_2" className="modal">
              <form
                onSubmit={submitHandler}
                method="dialog"
                className="modal-box flex flex-col gap-3"
              >
                <h3 className="font-bold text-lg">Login</h3>
                <input
                  className="input input-bordered w-full max-w-xs border-2 border-info"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                />
                <input
                  className="input input-bordered w-full max-w-xs border-2 border-info"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter your password"
                />
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <Link to="/register">
                  <button className="btn btn-primary w-full max-w-xs" type="submit">
                    Register
                  </button>
                </Link>
              </form>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
