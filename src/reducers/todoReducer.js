import {v4} from 'uuid';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.todo.title, 
        brief: action.todo.brief, 
        id: v4()}
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}