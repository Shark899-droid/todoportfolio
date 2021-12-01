import React from 'react';
import './ToDoDone.css';
import ToDoComponent from '../../components/ToDoComponent/ToDoComponent';
import { useGlobalContext } from '../../context';
const ToDoDone = ({ todo, check, change }) => {
  const { toDoItems } = useGlobalContext();
  const filterDone = toDoItems.filter((todos) => {
    return todos.completed === true;
  });
  return (
    <>
      <div className='toDoContainer'>
        <ToDoComponent todo={filterDone} check={check} change={change} />
      </div>
    </>
  );
};

export default ToDoDone;
