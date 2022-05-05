import * as React from 'react';
import Item from "./Item";


const Items = (props) => {

    return (
        <div>
            <br/>
                <h3>Items List Output:</h3>
            <br/>
            {props.allItems.map((item) => (

            <ul key={item.id}>
               <Item item={item} getItems={props.getItems}/>
            </ul>

            )
        )}
        </div>
    )
}
export default Items;