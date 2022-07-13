import React from 'react'
import {TitleContainer} from './Styles'

function Title({title,number}) {
  return (

        <TitleContainer>
            <h2><span>{number}</span>  {title}</h2>
        </TitleContainer>
   
  )
}

export default Title