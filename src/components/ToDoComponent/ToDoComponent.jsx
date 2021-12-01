import React from 'react';
import './ToDoComponents.css';
import { BsTrash } from 'react-icons/bs';
import { useGlobalContext } from '../../context';

const ToDoComponent = ({ todo, check, change }) => {
  const { deleteOne } = useGlobalContext();
  return (
    <>
      {todo.map((todos) => {
        return (
          <div className='toDoComponentContainer' key={todos._id}>
            <input type='checkbox' checked={check} onChange={change} />
            <p>{todos.todo}</p>
            <BsTrash className='delete' onClick={() => deleteOne(todos._id)} />
          </div>
        );
      })}
    </>
  );
};

export default ToDoComponent;
