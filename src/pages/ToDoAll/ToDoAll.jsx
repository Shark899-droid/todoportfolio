import React from 'react';
import './ToDoAll.css';
import ToDoComponent from '../../components/ToDoComponent/ToDoComponent';
import { useGlobalContext } from '../../context';

const ToDoAll = ({ todo, check, change }) => {
  const { toDoItems } = useGlobalContext();
  return (
    <>
      <div className='toDoContainer'>
        <ToDoComponent todo={toDoItems} check={check} change={change} />
      </div>
    </>
  );
};

export default ToDoAll;
