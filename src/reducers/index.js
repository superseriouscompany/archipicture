import {createStore, combineReducers} from 'redux';
import mat from './mat'
const reducers = combineReducers({
  mat,
})

const store = createStore(
  reducers,
);
module.exports = store;
