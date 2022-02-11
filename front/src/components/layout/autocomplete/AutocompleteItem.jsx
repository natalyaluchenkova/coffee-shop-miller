import {Link} from "react-router-dom";

export function AutocompleteItem (props){
    return (
        <li>
            <img src={"http://localhost:3001" + props.item.image[0]} className="autocompliteImg" width="30px" alt={props.item.name}/>
            <Link to={`/product/${props.item._id}`} onClick={props.close} >{props.item.name}</Link>            
        </li>
    )

}