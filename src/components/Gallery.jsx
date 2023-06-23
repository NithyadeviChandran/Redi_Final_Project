import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Gallery({ child1, gallery, photos, setPhotos }) {
  const [image, setImage] = useState([]);
  let result = "";
  if (child1) {
    console.log(child1);
    result = gallery && gallery.filter((i) => i.childId == child1.id);
    console.log(result);
  }

  useEffect(() => {
    if (result) {
      setPhotos(result);
    }
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const clickHandler = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("https://nithya-render.onrender.com/gallery", formData)
      .then((result) => console.log(result))
      .catch((i) => console.log(i));
  };

  return (
    <>
      {photos &&
        photos.map((i) => (
          <div className="card w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={i.photos} alt="" />
            </figure>
          </div>
        ))}
      <br />
      <h4 className="text-xl"> Newly added Images</h4>
      <div className="card w-72 bg-base-100 shadow-xl">
        <img src={image} alt="" />
      </div>
      <br />
      <div className="min-h-screen">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          onChange={changeHandler}
        />
    <Link to={"/childpage"}>
        <button className="btn btn-primary">Go to Profile</button>
      </Link>
        {/* <button className="btn btn-primary" onClick={clickHandler}>
            Upload Photos
          </button> */}
      </div>
   
    </>
  );
}

export default Gallery;
