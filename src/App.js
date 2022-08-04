import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Person from './component/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    noteService.getAll()
      .then(res=>setPersons(res))
 
  }, [])

  const addName = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length+1}`
    }
    persons.map(e=>e.name.toLowerCase()).indexOf(newName.toLowerCase()) > -1 
      ? alert(`${newName} has a duplicate`) 
      : setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const deleteItem = (id) => {
    setPersons(persons.filter(e=>e.id!==id))
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }  

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter <input value={filterName} onChange={handleFilterChange} />
      </div>
      <form onSubmit = {addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Person persons={persons} filterName={filterName} deleteItem={deleteItem}/> 
      </ul>
      
    </div>
  )
}

export default App
