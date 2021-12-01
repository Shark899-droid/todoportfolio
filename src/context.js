import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toDoItems, setToDoItems] = useState([]);
  const [todoAdd, setToDoAdd] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const deleteAll = () => {
    axios
      .delete('http://localhost:8001/api/toDo')
      .then((response) => response.data);
  };

  const deleteOne = (id) => {
    axios
      .delete(`http://localhost:8001/api/toDo/${id}`)
      .then((response) => response.data);
  };

  const submitBtn = (e) => {
    e.preventDefault();
    if (todoAdd !== '') {
      axios.post('http://localhost:8001/api/toDo', {
        todo: todoAdd,
      });
    }
    setToDoAdd('');
  };

  const settingToDo = (e) => {
    setToDoAdd(e.target.value);
  };

  const changeChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    axios('http://localhost:8001/api/toDo').then((response) => {
      setToDoItems(response.data);
    });
  }, [toDoItems]);
  return (
    <AppContext.Provider
      value={{
        toDoItems,
        todoAdd,
        isChecked,
        submitBtn,
        changeChecked,
        settingToDo,
        deleteOne,
        deleteAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
