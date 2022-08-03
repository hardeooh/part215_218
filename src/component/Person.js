import React from 'react'

const Person = ({name}) => {
  console.log(name.name)
  return (
    <li>{name.name} {name.number}</li>
  )
}

export default Person