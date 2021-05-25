import React, { useContext } from 'react';
import {LanguageContext } from '../../Context/LanguageContext'
import Image from '../Image'

function  AboutMe() {

    const {data} = useContext(LanguageContext)
     return(

        <div className='AboutMe-wrapper'>
         <div className='Mac-container'>  
          <Image
         setImage={'Foto'}/>
         </div>
          <div className='name-container'>

              {data.map((info,i) => {
                  return(
                      <div key={i}>
               <h2>{info.main[0].section}</h2>
              <p className='text-container'>
               {info.main[0].description}
              </p>
              </div>)
              })}
       
          </div>
          

        </div>
     )
}

export default AboutMe;