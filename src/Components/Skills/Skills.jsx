import React, { useContext } from 'react';
import {LanguageContext } from '../../Context/LanguageContext'

function  Skills() {
   const {data} = useContext(LanguageContext)

     return(

        <div className='Skills-wrapper'>
         
                   <h2>{'<Skills/>'}</h2>
               <div className="skills-content"> 
            {data.map((info,i)=>{
             return(
                
             info.resume.skills.map((d,i) => {
                return(
                   
                   <div className='skills' key={i}>
                   <p>{d.name}</p>
                   <i className={d.class}></i>
                  </div>
                
                )
             })

             
            )
              })}
         </div>
        </div>
     )

}
export default Skills;