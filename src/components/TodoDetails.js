import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
      <div className="title">{todo.title}</div>
      <div className="brief">{todo.brief}</div>
    </li>
  );
}

export default TodoDetails;