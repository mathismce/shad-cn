import { useState } from 'react';
import { Button } from "@/components/ui/button";
import './index.css';
import './fonts.css';
import Icon from './Icon';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='flex justify-between p-4' style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
        <Icon width={30} height={32} style={{ color: 'red' }} />
        <div className='flex gap-4'>
          <h3>Logements</h3>
          <h3>Experiences</h3>
          <h3>Mettre mon logement sur Airbnb</h3>
        </div>
      </div>
      
      <div className='flex flex-col p-8' style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
        <h1>To-Do List</h1>
        <div className='flex gap-2'>
          <input 
            type='text' 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder='Ajouter une tâche' 
            className='border p-2'
          />
          <Button onClick={addTodo}>Ajouter</Button>
        </div>
        <ul className='mt-4'>
          {todos.map((todo, index) => (
            <li key={index} className='flex justify-between items-center p-2 border-b'>
              <span 
                onClick={() => toggleTodo(index)} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <Button variant="secondary" onClick={() => deleteTodo(index)}>Supprimer</Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
