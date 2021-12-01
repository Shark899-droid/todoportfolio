import React, { useState, useEffect } from 'react';
import './App.css';
import { AiFillCalendar, AiOutlineUnorderedList } from 'react-icons/ai';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { Link, Routes, Route } from 'react-router-dom';
import ToDo from './pages/Todo/ToDo';
import ToDoAll from './pages/ToDoAll/ToDoAll';
import ToDoDone from './pages/ToDoDone/ToDoDone';

import { useGlobalContext } from './context.js';

function App() {
  const { todoAdd, submitBtn, settingToDo, deleteAll } = useGlobalContext();

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div className='addTasks'>
        <input
          type='text'
          value={todoAdd}
          onChange={settingToDo}
          placeholder='Add Task'
        />
        <button type='button' onClick={submitBtn}>
          CREATE
        </button>
      </div>

      <div className='containerGrid'>
        <div className='itemGrid'>
          <Link to='/todo'>
            <AiFillCalendar />
            <span>TO DO</span>
          </Link>
        </div>
        <div className='itemGrid'>
          <Link to='/todoDone'>
            <MdOutlineCheckCircle />
            <span>DONE</span>
          </Link>
        </div>
        <div className='itemGrid'>
          <Link to='todoAll'>
            <AiOutlineUnorderedList />
            <span>ALL</span>
          </Link>
        </div>
      </div>
      <section>
        <div className='routesContainer'>
          <Routes>
            <Route path='/todo' element={<ToDo />}></Route>
            <Route path='/todoDone' element={<ToDoDone />}></Route>
            <Route path='/todoAll' element={<ToDoAll />}></Route>
          </Routes>
        </div>
        <button type='button' onClick={deleteAll} className='deleteAll-btn'>
          DELETE ALL
        </button>
      </section>
    </>
  );
}

export default App;
