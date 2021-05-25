
import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {LanguageContext } from '../../Context/LanguageContext'
import { FaReact ,FaRocket} from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

function  Experience() {
   const {data} = useContext(LanguageContext)

     return(

        <div className='portfolio-wrapper'>
          {data.map((title,i) => {
           return(
             <h2 key={i}>{title.title}</h2>
           )
          })}
            
            <VerticalTimeline>
               {data.map((info,i) => {
               
                  return(
                    info.experience.map((lip,i) => {
            return(
               
                       <VerticalTimelineElement
className='vertical-timeline-element--work'
contentStyle={{ background: '#293241', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  #293241' }}
date={lip.years}
iconStyle={{ background: '#293241', color: '#fff' }}
icon={<FaReact/>}
key={i}
>
<h3 className='vertical-timeline-element-title'>{lip.company}</h3>
<h4 className='vertical-timeline-element-subtitle'>{lip.location}</h4>
<p>
  {lip.detail}
</p>
</VerticalTimelineElement>
)
                    })
              )
            })}
                <VerticalTimelineElement
                      className='vertical-timeline-element--work'
                      iconStyle={{ background: '#293241', color: '#fff' }}
                      icon={<FaRocket/>}
                      ></VerticalTimelineElement>
  
</VerticalTimeline>



        </div>
        
     )
}

export default Experience;

