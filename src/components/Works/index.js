import React from 'react'
import Icon4 from '../../images/ifa.svg'
import Icon5 from '../../images/Group.svg'
import Icon6 from '../../images/Лого.svg'
import Icon7 from '../../images/it3.svg'
import Icon2 from '../../images/project.png'

import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
}
    from './WorksElement'
const Works = () => {
    return (
       <ServicesContainer id='works'>
           <ServicesH1>Projects</ServicesH1>
          
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon2}/>
               </ServicesCard> 
               <ServicesCard>
                   <ServicesIcon src={Icon7}/>
               </ServicesCard>
               <ServicesCard to={{ pathname: "https://vitamed.kg" }} target="_blank" >
                   <ServicesIcon src={Icon4}/>
               </ServicesCard>
               <ServicesCard  to={{ pathname: "https://vedanta.kg" }} target="_blank">
                   <ServicesIcon src={Icon5}/>
                  
               </ServicesCard>
               <ServicesCard  to={{ pathname: "https://sbbar.kg" }} target="_blank">
                   <ServicesIcon src={Icon6}/>
                
               </ServicesCard>
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Works