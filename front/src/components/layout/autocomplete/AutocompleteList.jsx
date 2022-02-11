import {AutocompleteItem} from "./AutocompleteItem"

export function AutocompleteList (props){
    const items = props.items;
    const close = props.close;
    return (
        <ul className="autocompleteList">
            {
                items.map( (item, index) => 
                (index < 10) &&
                <AutocompleteItem key={item._id} item={item} close={close}></AutocompleteItem>
           )}
        </ul>
)
};