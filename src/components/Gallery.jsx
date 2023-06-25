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
    <div className="App min-h-screen flex flex-col justify-normal items-center gap-5">
    <h2 className="font-sans text-bold"> Cherishing Memories!</h2>
      {/* {photos &&
        photos.map((i) => (
          <div className="card w-72 bg-base-100 shadow-xl">
            <figure>
              <img src={i.photos} alt="" />
            </figure>
          </div>
        ))} */}
    {photos &&
        photos.map((i) => (
<div className="carousel w-72">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={i.photos[0]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={i.photos[1]}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={i.photos[2]}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={i.photos[3]}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   ))}
      <br />
      <h4 className="text-xl"> New Memories</h4>
      <div className="card w-72 h-72 bg-base-100 shadow-xl">
        <img src={image} alt="" />
      </div>
      <br />
      <div className="min-h-screen flex flex-col justify-normal items-center gap-10">
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
    </div>
    </>
  );
}

export default Gallery;
