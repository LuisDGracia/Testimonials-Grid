import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex; 
  align-items: center;
`

export const UserInfo = styled(UserContainer)`
  display: inline-block;
  margin-left: 10px;
  padding: 0;
`

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 30px;
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  margin: 0;
`
  
export const UserName = styled.p`
  margin: 0;
  color: ${ ({ color }) => color ? 'hsl(0, 0%, 100%)' : 'black' };
  font-size: 14px;
`

export const UserStatus = styled(UserName)`
  color: ${ ({ color }) => color ? 'hsla(0, 0%, 100%, 0.5)' : 'hsla(0, 0%, 0%, 0.5)' };
  font-size: 12px;
`