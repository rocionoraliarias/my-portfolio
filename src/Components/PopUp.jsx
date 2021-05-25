import {AiOutlineClose ,AiFillGithub , AiOutlineLink} from 'react-icons/ai';

function Popup({show ,close,req}) {

    return(
        <div >
           
      {show === true && 
      <div>
      <div className='fade modal-backdrop show'></div> 
    <div className='popup'>
          <AiOutlineClose
    onClick={close}
    className='close-button'/>
    <h3>{req.title}</h3>
    <p>{req.description}</p>
   
    <img src={`${req.images[1]}`} alt='pokedexProyect' />
    <div className='technologies'>
        
        {req.technologies.map((technologie,i) => {
            return(
                <div className='technologies-container' key={i}>
            <i className={technologie.class}></i>
            <p>{technologie.name}</p>
            </div>
            )
        })

        }
        
    </div>
    <div className='data-link'>
         
            <a href={req.repositorio}><AiFillGithub/></a>
            <a href={req.url}><AiOutlineLink/></a>
            </div>
        </div>
    
    
  </div>
    }
        </div>
        

    )
}

export default Popup;