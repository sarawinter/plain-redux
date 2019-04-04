const { createStore } = require('redux');

const initialState = {
    sum: 0
};

const myReducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === 'ADD') {
        newState.sum += action.payload;
    }
    if (action.type === 'SUBTRACT') {
        newState.sum -= action.payload;
    }

    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
});

store.dispatch({ type: 'ADD', payload: 12 });
store.dispatch({ type: 'ADD', payload: 22 });
store.dispatch({ type: 'ADD', payload: 3 });
store.dispatch({ type: 'SUBTRACT', payload: 15 });

//To run, write in console: node plain-redux.js