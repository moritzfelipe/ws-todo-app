import React from 'react';
import { Check, Trash2, Circle } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div 
      className={`group flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-300 ${
        completed 
          ? 'bg-red-900/40 hover:bg-red-900/60' 
          : 'bg-emerald-900/40 hover:bg-emerald-900/60'
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="flex-shrink-0 focus:outline-none"
      >
        {completed ? (
          <Check className="w-5 h-5 text-red-400" />
        ) : (
          <Circle className="w-5 h-5 text-emerald-400" />
        )}
      </button>
      
      <span className={`flex-grow ${
        completed 
          ? 'line-through text-gray-400' 
          : 'text-gray-100'
      }`}>
        {text}
      </span>
      
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-red-400 focus:outline-none"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}