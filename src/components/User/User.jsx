import React from 'react'
import { UserContainer, UserName, UserPhoto, UserStatus, UserInfo } from './UserStyled'

function User({ src, color, alt, name }) {
  return (
    <UserContainer>
      <UserPhoto src={src} alt={alt} />

      <UserInfo>
        <UserName color={color} >
          {name}
        </UserName>

        <UserStatus color={color} >
          Verified Graduate
        </UserStatus>
      </UserInfo>
    </UserContainer>
  )
}

export default User
