import React from 'react'

const UserCard = ({name, position}) => {
    // const {name, position} = props;
      return (
    <div>
    <h3>{name}</h3>
    <p>{position}</p>
    </div>
  )
}

export default UserCard