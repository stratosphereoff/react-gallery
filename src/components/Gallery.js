import React, { useState } from "react";
import Modal from "./Modal";

import { Flex } from '@chakra-ui/react'

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpg'
import img11 from '../img/img11.jpg'
import img12 from '../img/img12.jpg'
import img13 from '../img/img13.jpg'
import img14 from '../img/img14.jpg'
import img15 from '../img/img15.jpg'
import img16 from '../img/img16.jpg'
import img17 from '../img/img17.jpg'
import img18 from '../img/img18.jpg'
import img19 from '../img/img19.jpg'
import img20 from '../img/img20.jpg'
import img21 from '../img/img21.jpg'
import img22 from '../img/img22.jpg'
import img23 from '../img/img23.jpg'
import img24 from '../img/img24.jpg'
import img25 from '../img/img25.jpg'
import img26 from '../img/img26.jpg'


function Gallery() {

  let data = 
  [ 
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
  ]

  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.imgSrc);
  };

  const handleRotationRight = () => {
    const totalLength = data.length;
    if(currentIndex +1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].imgSrc;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgSrc;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  }

  const handleRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].imgSrc;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imgSrc;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Flex as="wrapper">
      {data.map((item, index) => (
        <div key={index} className="wrapper-images">
            <img src={item.imgSrc} alt={item.text} onClick={() => handleClick(item, index)}/>
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
    </Flex>
  );
}

export default Gallery;
