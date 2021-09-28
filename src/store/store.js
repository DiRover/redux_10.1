import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';

const reducer = combineReducers({//собираем редбюсер
    serviceAdd: serviceAddReducer,
    serviceList: serviceListReducer,
});

const store = createStore(reducer,//создаём сторе
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;