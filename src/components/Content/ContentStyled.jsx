import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
`

export const MainText = styled.p`
  margin-top: 10px;
  color: ${ ({ color }) => color ? 'hsl(0, 0%, 90%)' : 'black'};
  font-weight: 600;

  @media${device.desktop}{
    font-size: ${ ({ size }) => size };
  }
  @media${device.laptopL}{
    font-size: ${ ({ size }) => `calc( ${size} - 0.7em)` };
  }
  @media${device.laptop}{
    font-size: ${ ({ size }) => `calc( ${size} - 1.15em)` };
  }
  @media${device.tablet}{
    font-size: 1.4em;
  }
  @media${device.mobileL}{
    font-size: 1.3em;
  }
`

export const SecondaryText = styled(MainText)`
  font-weight: 500;
  color: ${ ({ color }) => color ? 'hsla(0, 0%, 90%, 0.5)' : 'hsla(0, 0%, 0%, 0.5)'};

  @media${device.desktop}{
    font-size: ${ ({ size }) => size };
  }
  @media${device.laptopL}{
    font-size: ${ ({ size }) => `calc( ${size} - 0.31em)` };
  }
  @media${device.laptop}{
    font-size: ${ ({ size }) => `calc( ${size} - 0.50em)` };
  }
  @media${device.tablet}{
    font-size: ${ ({ size }) => `calc( ${size} - 0.10em)` };
  }
  @media${device.mobileL}{
    font-size: 1.2em;
  }
`