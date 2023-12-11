import React from 'react'
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos}) {

  return (
    <>
      {totalTodos === completedTodos ?
        (<h1 className='TodoCounter'>
        FELICIDADES!!! HAS COMPLETADOS TODOS TUS TODOS</h1>
        ):
        (<h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>)
      
      }
    </>
    
  )
}

export {TodoCounter}