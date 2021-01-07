import styled from 'styled-components'

export const TestimonialContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;

  ${ ({ startC, endC, startR, endR, bgColor }) => {
    return`
      background-color: hsl(${bgColor});
      grid-column: ${startC} / ${endC};
      grid-row: ${startR} / ${endR};
    `
  }}

  @media screen and (max-width: 1023px){
    width: 80%;
  }
`;

export const QuotationImg = styled.img`
  width: 150px;
  height: 110px;
  margin: 0;
  position: absolute;
  top: 0;
  right: 80px;
  z-index: 1;
`