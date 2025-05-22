'use client'

import React from 'react'

type Todo = {
  id: string
  text: string
  completed: boolean
}

type TodoListProps = {
  todos: Todo[]
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        No todos yet. Add one above!
      </div>
    )
  }

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className="flex items-center justify-between rounded-md border border-gray-200 p-4 shadow-sm dark:border-gray-700"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
            />
            <span 
              className={`ml-3 text-sm ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList 