import React from 'react'

const Error = ({message}) => {
  if(message===''){
    return(
      <div></div>
    )
  }
  else{
  return (
    <div className='error'>{message}</div>
  )
  }
}

export default Error