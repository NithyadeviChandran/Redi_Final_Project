import React from "react";

function NewProfile() {
  return (
    <div className="min-h-screen flex flex-col  gap-10">
      <form>
        <input
          className="input input-bordered input-primary  w-48  border-2 border-info mt-14 md: w-52 mx-24"
          type="text"
          name="Name"
          id=""
          placeholder="Enter the child name"
        />
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-14"
          name="Name"
          id=""
          placeholder="Upload the child photo"
        />
        <button className="btn btn-primary mt-14 mx-14" type="submit" onClick={()=>{
            alert('Thank You for Creating a New Profile!')
        }}>Create Profile</button>
      </form>
    </div>
  );
}

export default NewProfile;
