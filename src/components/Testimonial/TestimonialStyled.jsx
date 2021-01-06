import styled from 'styled-components'

export const TestimonialContainer = styled.div`
  background-color: black;
  border-radius: 10px;

  ${ ({ startC, endC, startR, endR }) => {
    return`
      grid-column: ${startC} / ${endC};
      grid-row: ${startR} / ${endR}
    `
  }}
`;