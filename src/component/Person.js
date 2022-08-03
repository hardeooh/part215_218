import React from 'react'

const Person = ({persons, filterName, deleteItem}) => {

     console.log(persons)
     console.log(filterName);
  return ( 
    persons.filter(e=> {
      console.log(e.name)
      return (filterName==="")
        ? e
        : (e["name"].toLowerCase().includes(filterName.toLowerCase()))
          ? e
          : false
    })  
      .map(e=> <li key={e.id}>
        {e.name} {e.number} 
        <button onClick={() => {
          deleteItem(e.id)
        }}>Delete</button>
      </li>)
  )
  
}

export default Person