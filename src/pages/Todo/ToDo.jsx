import React from 'react';
import './ToDo.css';
import ToDoComponent from '../../components/ToDoComponent/ToDoComponent';
import { useGlobalContext } from '../../context';

const ToDo = ({ todo, check, change }) => {
  const { toDoItems } = useGlobalContext();
  const filterTodo = toDoItems.filter((todos) => {
    return todos.completed === false;
  });
  return (
    <>
      <div className='toDoContainer'>
        <ToDoComponent todo={filterTodo} check={check} change={change} />
      </div>
    </>
  );
};

export default ToDo;
