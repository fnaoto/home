import reducers from "./reducers";
import { createStore } from 'redux';

const store = createStore(reducers);

/* 
Memo:
Store state of reducers with redux.
*/
export default store;
