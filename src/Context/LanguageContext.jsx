import { createContext ,useEffect, useState } from 'react';



export const LanguageContext = createContext();


export default function Languageinfo({children}) {


const [lenguaje , setLenguaje ] = useState(true)
const [data, setData ] = useState([])
useEffect(() => {

  var Url = lenguaje === true ?   '/Data/Data.json' : '/Data/DataEN.json'
  fetch(Url)
    .then((res) => res.json())
    .then((data) => setData(data))
    ;
}, [lenguaje]);



function onInglish ()  {
setLenguaje(false)
}
function onSpanish () {
setLenguaje(true)
}


return(
<LanguageContext.Provider value={{ onSpanish , onInglish , data}}>
{children}

</LanguageContext.Provider>

)




}