import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const NewTodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== ''){

      dispatch({ type: 'ADD_TODO', todo: { title, brief }});
    }
    setTitle('');
    setBrief('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Todo Title" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Brief..." value={brief}
        onChange={(e) => setBrief(e.target.value)} />
      <input type="submit" value="Add todo" />
    </form>
  );
}
 
export default NewTodoForm;