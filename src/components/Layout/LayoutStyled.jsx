import styled from 'styled-components'

export const TestimonialsContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: hsl(210, 46%, 95%);

  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat( 12, 1fr ) ;
  grid-template-rows: repeat( 12, 1fr ) ;
  grid-gap: 20px;

  @media screen and (max-width: 1023px){
    margin-top: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
`;