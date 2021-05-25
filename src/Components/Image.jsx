import React from 'react'



function Image ({setImage,setClassname}){
  
     return(
       <img src={`/Images/${setImage}.svg`} className={setClassname ? setClassname : 'image-svg'} alt='dibujo'>
       </img>
    );
  
}



export default Image;