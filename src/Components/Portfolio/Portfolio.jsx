import React , {useState , useContext } from 'react'
import {LanguageContext } from '../../Context/LanguageContext'
import PopUp from '../PopUp'


function Portfolio() {

    const {data} = useContext(LanguageContext)


    const [ show, setShow ] = useState()
    const [req, setReq] = useState([])



    function onLick(datas) {
        setShow(true)
       setReq(datas)

    }
    function close() {
        setShow(false)
    }
    
    return( 


        <div className='portfolio-wrapper'>
            <h2>{'<Portfolio/>'}</h2>
   

  <div className='devices-container'>
   {data.map((inf,i) =>
   {
    
       return (

        inf.projects.map((datas,i) => {
            //console.log(datas)
                        return(
                            
                <div key={i}>
                    
            <img src={`${datas.images[0]}`} alt='pokedexProyect' onClick={() => onLick(datas)} />
            
          

             </div>
            )
        })
       )
   }
   )

}
</div>
<PopUp 
show={show}
req={req}
close={close}/>
  
</div>
    )
}

export default Portfolio;