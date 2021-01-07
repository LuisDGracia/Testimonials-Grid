import React, { Fragment } from 'react'
import Content from '../Content/Content'
import { TestimonialContainer, QuotationImg } from './TestimonialStyled'
import quote from '../../assets/svg/bg-pattern-quotation.svg'
import { data } from '../../data/comments'

function Testimonials() {

  const importAll = ( imported ) => {

    let images = {}
    imported.keys().map( item => images[item.replace('./', '')] = imported(item) )

    return images
  }

  const photos = importAll( require.context( '../../assets/images', false, /(\.jpe?g$)/ ) );

  return (
    <Fragment>
      <TestimonialContainer startC="2" startR="2" endC="8" endR="7" bgColor={"263, 55%, 52%"} >
        <QuotationImg src={quote} />
        <Content 
          photo={photos['image-daniel.jpg'].default} 
          alt={ 'daniel' }
          text={data.daniel} 
          mainSize='1.3em' 
          secondSize='0.9em'
          color />
      </TestimonialContainer>

      <TestimonialContainer startC="8" startR="2" endC="10" endR="7" bgColor={"217, 19%, 35%"} >
        <Content 
          photo={photos['image-jonathan.jpg'].default}
          alt={ 'jonathan' } 
          text={data.jonathan} 
          mainSize='1em' 
          secondSize='0.9em'
          color />
      </TestimonialContainer>
      
      <TestimonialContainer startC="10" startR="2" endC="12" endR="12" bgColor={"0, 0%, 100%"} >
        <Content 
          photo={photos['image-kira.jpg'].default}
          alt={ 'kira' }
          text={data.kira} 
          mainSize='1em' 
          secondSize='0.9em' />
      </TestimonialContainer>

      <TestimonialContainer startC="2" startR="7" endC="4" endR="12" bgColor={"0, 0%, 100%"} >
        <Content 
          photo={photos['image-jeanette.jpg'].default}
          alt={ 'jeanette' }
          text={data.jeanette} 
          mainSize='1em' 
          secondSize='0.9em' />
      </TestimonialContainer>

      <TestimonialContainer startC="4" startR="7" endC="10" endR="12" bgColor={"219, 29%, 14%"} >
        <Content 
          photo={photos['image-patrick.jpg'].default}
          alt={ 'patrick' }
          text={data.patrick}
          mainSize='1.3em' 
          secondSize='0.9em'
          color />
      </TestimonialContainer>
    </Fragment>
  )
}

export default Testimonials
