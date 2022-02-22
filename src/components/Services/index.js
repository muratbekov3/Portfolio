import React from 'react'
import Icon1 from '../../images/javascript.png'
import Icon2 from '../../images/React-icon.svg.png'
import Icon3 from '../../images/html.png'
import Icon4 from '../../images/css.png'
import Icon5 from '../../images/node2.png'
import Icon6 from '../../images/mongo1.png'
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,}
    from './ServicesElement'
const Services = () => {
    return (
       <ServicesContainer id='services'>
           <ServicesH1>Skills</ServicesH1>
          
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon2}/>
                  
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                  
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon4}/>
                 
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon5}/>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon6}/>
               </ServicesCard>
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
