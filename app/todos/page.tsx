'use client'

import { useState } from 'react'
import * as _ from 'lodash'
import Link from 'next/link'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

type Todo = {
  id: string
  text: string
  completed: boolean
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Learn Next.js', completed: false },
    { id: '2', text: 'Build a todo app', completed: false },
    { id: '3', text: 'Deploy to production', completed: false },
  ])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: _.uniqueId('todo_'),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <Link 
            href="/"
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Home
          </Link>
        </div>
        
        <TodoForm onAddTodo={addTodo} />
        
        <TodoList 
          todos={todos} 
          onToggleTodo={toggleTodo} 
          onDeleteTodo={deleteTodo} 
        />
      </div>
    </div>
  )
} 