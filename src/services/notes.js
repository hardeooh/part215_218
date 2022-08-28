import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const create = (newObject) => {
  console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request
}

const update = (index,newNumber,{name,number,id}) => {
  console.log(name,number,id);  
  const request = axios.put(`${baseUrl}/${index}`,{name: name, number: newNumber, id: id})
  return request
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

export default { getAll, create, update, remove }