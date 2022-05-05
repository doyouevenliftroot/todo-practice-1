
import React, {useState} from 'react';
import axios from 'axios';

const TodoCreator = (props) => {
    let [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents refresh of the page on the function being invoked
        axios.post(`http://localhost:3001/api/items`, {content: input} )
            .then(res => {
                console.log(res);
                console.log(res.data);
                props.getItems();
            })
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>

                        <input type="text" name="name" onChange={handleChange} />
                        <button type="submit">Add Item</button>

                </form>
            </div>
        )
}

export default TodoCreator;