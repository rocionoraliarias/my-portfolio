import React, { useContext } from 'react';
import {LanguageContext } from '../../Context/LanguageContext'
import Switch from './Switch'
import Image from '../Image'


function Navbar() {
  const {data, onInglish, onSpanish} = useContext(LanguageContext)

  
  return (
    <div>
   <nav className='nav-bar'>
     <div className='flag-container'>
  <button onClick={onSpanish}> <Image
    setImage={'spain'}
    /></button>
  <button onClick={onInglish}> <Image
    setImage={'united-kingdom'}
    /></button>
  </div>
  <Switch/>
   </nav>
    <div className='content-wrapper'>
    <Image
    setImage={'Presentation'}
    />
     {data.map((index,i) =>
    <h1 key={i}>{index.main[0].name}</h1>)}

    </div>
     </div>
  );
}

export default Navbar;
