import {useEffect, createContext, useReducer } from "react";
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
    order:
        JSON.parse(localStorage.getItem("order")) === null
        ? []
        : JSON.parse(localStorage.getItem("order")),
    alertName: '',
    isBasketShow: false,
};

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    useEffect(
        () => {
            localStorage.setItem("order", JSON.stringify(value.order));
            console.log(JSON.parse(localStorage.getItem("order")))
        },
        [value.order]
    );

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    }

    value.incQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId} });
    }

    value.decQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId} });
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId} });
    };
    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'});
    };


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}