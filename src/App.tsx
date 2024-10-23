import React, { useState, useEffect } from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckSquare className="w-8 h-8 text-emerald-400" />
            <h1 className="text-2xl font-semibold text-white">Todo List</h1>
          </div>

          <TodoInput onAdd={addTodo} />

          <div className="mt-8 space-y-3">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>

          {todos.length > 0 && (
            <div className="mt-6 text-sm text-gray-400">
              {completedCount} of {todos.length} tasks completed
            </div>
          )}

          {todos.length === 0 && (
            <div className="mt-8 text-center text-gray-400">
              No tasks yet. Add one above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;