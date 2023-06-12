import React, { useState } from "react";
import "../assets/Home.css";

export default function Images({image1, image2}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  const renderImageName = (image, isActive) => {
    return <p className={!isActive ? 'fade-in' : 'fade-out'}>{image}</p>;
  }

  return (
    <div>
      {renderImageName(!isActive ? <img src={image1} alt="sample" className="homeImg"/> : <img src={image2} alt="sample" className="homeImg"/>, isActive)}
      <input type="checkbox" checked={isActive} onClick={handleClick} />
    </div>
  );
}
