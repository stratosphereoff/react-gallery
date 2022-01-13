import React, { useState } from "react";
import data from "../data/images.json"
import Modal from "./Modal";

function Gallery() {

  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if(currentIndex +1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  }

  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
            <img src={item.link} alt={item.text} onClick={() => handleClick(item, index)}/>
            <h2>{item.text}</h2>
        </div>
      ))}
      {clickedImage && (
      <Modal 
        clickedImage={clickedImage} 
        handleRotationRight={handleRotationRight}
        setClickedImage={setClickedImage}
        handleRotationLeft={handleRotationLeft}
      />        
      )}
    </div>
  );
}

export default Gallery;
