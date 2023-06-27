import React from "react";
import Logout from "./Logout";

function Nav() {
  return (
    <div className="navbar bg-neutral text-neutral-content  h-32">
      <div className="navbar-start">
        <a className="btn btn-neutral normal-case text-xl md:text-2xl font-mono">
          MemoryLane
          <ion-icon
            style={{ fontSize: "1.3em" }}
            name="pulse-outline"
          ></ion-icon>
        </a>
      </div >
    <div className="navbar-end">
      <Logout/>
  
    </div>
    </div >
  );
}

export default Nav;
