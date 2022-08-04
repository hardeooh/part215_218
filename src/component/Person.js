import React from 'react'

const Person = ({persons, filterName, deleteItem}) => {

  return ( 
    persons.filter(e=> {
      return (filterName==="")
        ? e
        : (e["name"].toLowerCase().includes(filterName.toLowerCase()))
          ? e
          : false
    })  
      .map(e=> 
      <li key={e.id}>
        {e.name} {e.number} 
        <button onClick={() => {
          return window.confirm('Are You Sure?')
          ? deleteItem(e.id)
          : false
        }}>Delete</button>
      </li>)
  )
  
}

export default Person