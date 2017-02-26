import {createStore, combineReducers} from 'redux';
import diagram from './diagram'
const reducers = combineReducers({
  diagram,
})

const store = createStore(
  reducers,
);
module.exports = store;
