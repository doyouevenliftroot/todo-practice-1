import axios from "axios";

const Item = (props) => {

    const handleChange = () => {
        axios.patch("http://localhost:3001/api/items/" + props.item.id, {completed: !props.item.completed} )
            .then( response => {
                console.log(response);
                console.log(response.data);
                props.getItems();
            })
    }

    const handleClick = () => {
        axios.delete("http://localhost:3001/api/items/" + props.item.id)
            .then( response => {
                console.log(response);
                console.log(response.data);
                props.getItems();
            })
    }

    if (props.item.completed === false) {
    return (
        <li>
           <span>
               <input type="checkbox" checked={props.item.completed} onChange={handleChange} />
               {"Id: " + props.item.id + "  Content:  " + props.item.content}
               <button onClick={handleClick}> Delete </button>
           </span>
        </li>
    )
    } else {
        return (
            <li>
           <del>
               <input type="checkbox" checked={props.item.completed} onChange={handleChange} />
               {"Id: " + props.item.id + "  Content:  " + props.item.content}
               <button onClick={handleClick}> Delete </button>
           </del>
            </li>
        )
    }
}
export default Item;