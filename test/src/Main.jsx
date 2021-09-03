// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { getTest } from './redux/modules/product';

function Main() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTest());
      }, []);
    return (
        <div>
            
        </div>
    )
}

export default Main
