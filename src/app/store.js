import { createStore } from "redux";

const initialState = {
    dudu: 'en',
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case'UPDATE_DATA':
        return{
            ...state,
            dudu:action.payload
        }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;





{/*

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Counter/counterSlice';
import myTextReducer from '../DataDesk/mytextSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mytext : myTextReducer
  },
});


*/}
