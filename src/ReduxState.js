import { createReduxModule } from 'hooks-for-redux';

export const [useCount, setCount] = createReduxModule("count",0,{
    inc: state => state + 1,
    add: (state, amount) => state + amount,
    reset: () => 0
});


