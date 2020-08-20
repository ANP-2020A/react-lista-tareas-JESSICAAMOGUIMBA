//import React, {useState} from 'react';
import React from 'react';
import UserList from './UserList'
import TodoList from './TodoList';
//import logo from '../images/logo.svg';
import '../styles/App.css';

const App = () => {
    return(
        <>
            <UserList />
            <TodoList/>
        </>
    );
};

export default App;