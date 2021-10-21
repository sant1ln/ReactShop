import React from 'react'

const statefull = () => {

  const [name, setName] = React.useState('Camila');

  return (
    <div>
      <h1 onClick={()=>setName('John')}>Hello {name}</h1>
    </div>
  )
}

export default statefull
