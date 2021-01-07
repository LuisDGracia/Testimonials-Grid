import React from 'react'
import { UserContainer, UserName, UserPhoto, UserStatus, UserInfo } from './UserStyled'

function User({ src, color }) {
  return (
    <UserContainer>
      <UserPhoto src={src} />

      <UserInfo>
        <UserName color={color} >
          Daniel Clifford
        </UserName>

        <UserStatus color={color} >
          Verified Graduate
        </UserStatus>
      </UserInfo>
    </UserContainer>
  )
}

export default User
