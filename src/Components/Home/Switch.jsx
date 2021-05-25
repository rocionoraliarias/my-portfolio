import React, {useState } from 'react';
import Switch from "react-switch";
import '../../Styles/Styles.css'

function Hola() {
    
    //checked empieza como false 
    const [checked, setChecked] = useState(false);
     
     
    function cosita(checked) {
      setChecked(checked);
      if(setChecked !== checked){
        cambiodetheme()
      }
    }

   function cambiodetheme() {
    var dataThemeAttribute = 'data-theme';
    var body = document.body;
    var newTheme =
    body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
   }
   
   

  return (
    <div>
    <Switch
     onChange={cosita}
      checked={checked}
      offColor="#c7c7c7"
      onColor="#353535"
      uncheckedIcon={
        <span
          className='iconify'
          data-icon='emojione-monotone:crescent-moon'
          data-inline='false'
          style={{
            display: 'block',
            height: '100%',
            fontSize: 20,
            textAlign: 'end',
            marginLeft: '5px',
            color: '#353239',
          }}
        ></span>
      }
      checkedIcon={
        <span
          className='iconify'
          data-icon='emojione-monotone:sun-with-face'
          data-inline='false'
          style={{
            display: 'block',
            height: '100%',
            fontSize: 20,
            textAlign: 'end',
            marginLeft: '5px',
            color: '#FFFFFF',
          }}
        ></span>
      }
    />
    </div>
  );
}

export default Hola;