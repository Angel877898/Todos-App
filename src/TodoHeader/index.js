import React from 'react'

export const TodoHeader = () => {
  return (
    <header>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  )
}
