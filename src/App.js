import './App.css';
import * as React from 'react';
import TodoCreator from "./Components/TodoCreator";
import {useEffect, useState} from "react";
import Items from "./Components/Items";

const App = () => {
    //setting allItems state with hooks:
    const [allItems, setAllItems] = useState([]);

    //CRUD API call:
    const getItems = async () => {
        const getAllItems = await fetch("http://localhost:3001/api/items");
        const results = await getAllItems.json();
        setAllItems(results);
    }

    useEffect(() => {  //sets page to update on anything that's invoked inside it.
        getItems();
    }, []);
    // end CRUD API call

    return (
    <div className="App">
        <h1>ToDo List App</h1>

        <TodoCreator allItems={allItems} getItems={getItems}/>
        <Items allItems={allItems} getItems={getItems}/>

    </div>
  );
}

export default App;
