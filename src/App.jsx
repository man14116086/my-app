import React from 'react';
import {useCount, setCount} from './ReduxState.js'

export default () => {
    const count = useCount();
    const inc = () => setCount(count+1);
    <p>
        Count: {count}
        {''}<input type="button" onClick={inc} value="+"/>
    </p>
}
