import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  width:'100%',
  border:'1px solid white',
}
const slideImages = [
  {url: 'https://www.ulcdn.net/media/Slideshow/Homeground-recliner-slideshow.gif?1682446273',
  
},
  {url: 'https://www.ulcdn.net/media/Slideshow/UI-Main-Banners-Slideshow_17th.jpg?1679055928',
  
},
  {url: 'https://www.ulcdn.net/media/Slideshow/Slideshow-Soiree-in-the-Sun.jpg?1682879550',
    
  },
  {url: 'https://www.ulcdn.net/media/Slideshow/60pluse-store-Slideshow.png?1683612728',
  },
];

export const Slideshow = () => {
    return (
      <DIV className="slide-container">
        
        <Slide>
         {slideImages.map((el, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${el.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </DIV>
    )
}

const DIV = styled.div`
    border:1px solid white;
    width:100%;
    height:auto;
    margin-top:30px;

  @media (max-width: 710px){
     width:100%;
}
`;