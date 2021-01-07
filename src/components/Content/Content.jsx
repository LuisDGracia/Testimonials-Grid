import React from 'react'
import User from '../User/User'
import { Container, MainText, SecondaryText } from './ContentStyled'

function Content({ photo, text, mainSize, secondSize, color, alt}) {
  return (
    <Container>
      <User src={photo} color={color} alt={alt} />
      <MainText size={mainSize} color={color} >
        {text.main}
      </MainText>

      <SecondaryText size={secondSize} color={color} >
        {text.second}
      </SecondaryText>
    </Container>
  )
}

export default Content
