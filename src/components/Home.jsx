import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home({ users, setUser }) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const person = users && users.find((i) => i.email === email);
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
      <div className="hero min-h-screen bg-info w-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-mono md:text-5xl">
              <span style={{ color: "gold" }}>K</span>id's
              <span style={{ color: "gold" }}> Y</span>ear
              <span style={{ color: "gold" }}> B</span>ook
            </h1>
            <p className="py-24 md:text-3xl font-mono">
              Beautiful Memories are like Old friends. Create one for your
              Child!They may not always be on your mind, but they are forever in
              your local storage!
            </p>
            <button
              className="btn btn-primary md:text-2xl font-mono"
              onClick={() => window.my_modal_2.showModal()}
            >
              Get Started
            </button>
            <dialog id="my_modal_2" className="modal">
              <form
                onSubmit={submitHandler}
                method="dialog"
                className="modal-box flex flex-col gap-3 md:h-50%"
              >
                <h3 className="font-bold text-lg">Login/Register</h3>
                <input
                  className="input input-bordered w-full max-w-xs border-2 border-info md:mx-16"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                />
                <input
                  className="input input-bordered w-full max-w-xs border-2 border-info md:mx-16"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter your password"
                />
                <div className="flex flex-col gap-1">
                  <button
                    className="btn btn-primary mx-24 md:btn-primary btn-sm w-28 mx-44"
                    type="submit"
                  >
                    Login
                  </button>
                  <Link to="/register">
                    <button
                      className="btn btn-primary w-full max-w-xs md:btn-primary btn-sm w-14 mx-28"
                      type="submit"
                    >
                      Register
                    </button>
                  </Link>
                </div>
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
