import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {AutocompleteList} from "./AutocompleteList";
import { getAutoComplete } from '../../../api';
import search from '../../img/search.png';
import del from '../../img/del-header.svg';
import '../../../css/header-footer.css';


export function Autocomplete(){
    const [searchString, setSearchString] = useState("");
    const [items, setItems] = useState([]);
    const [isSearchShow, setSearchShow] = useState(false);
    const [isBarShow, setBarShow] = useState(false);

    const handleBarShow = () => {
        setBarShow(!isBarShow);
    }
    
    const onChange = function (el) {
        setSearchString(el.target.value);
    }
    useEffect(() => {
        if (searchString.length < 2) return;
        getAutoComplete(searchString).then(res => {setItems(res); setSearchShow(true);})
            .catch(err =>
            console.log(err))
    }, [searchString]);

    const handleClose = () => {
        setSearchShow(false);
        setItems([]);
        let inputSearch = document.getElementById('searchInput');
        inputSearch.value = "";
    }
    
    
    return (
        <div className="search"> 
            {
                isBarShow &&                     
                    <div className='searchGroup'>                        
                        <input type="text" className="searchInput" id='searchInput'
                            onChange={onChange}  placeholder="Поиск" />
                        <i className="fas fa-times close" onClick={handleClose}></i>                        
                        <Link to={`/search/${searchString}`} onClick={handleClose}><img src={search} alt="search" className="forSearchPageImg" /></Link>
                    </div>
            }
            <div className="toggleSearchImg">
            {
                !isBarShow
                    ? <img src={search} className="searchImage smallHeaderImg" onClick={handleBarShow} alt="alt" />
                    : <img src={del} className="searchCloseImg smallHeaderImg" onClick={handleBarShow} alt="alt" />
            }
            </div>

            {isSearchShow &&
            (<AutocompleteList items={items} close={handleClose} />)
            }
            
        </div>
    )
}