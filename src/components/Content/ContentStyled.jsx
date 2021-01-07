import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
`

export const MainText = styled.p`
  font-size: ${ ({ size }) => size || '1em' };
  color: ${ ({ color }) => color ? 'hsl(0, 0%, 90%)' : 'black'};
  font-weight: 600;
`

export const SecondaryText = styled(MainText)`
  font-size: 0.7em;
  font-weight: 500;
  color: ${ ({ color }) => color ? 'hsla(0, 0%, 90%, 0.5)' : 'hsla(0, 0%, 0%, 0.5)'};
`