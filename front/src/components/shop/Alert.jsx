import {useEffect, useContext} from 'react';
import {ShopContext} from '../../context';
import '../../css/basket.css';

function Alert () {
    const { alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1500);

        return () => {clearTimeout(timerId)};

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return <div className="alert">
        <div><p>{name} добавлен в корзину</p></div>
    </div>
    }

export {Alert};