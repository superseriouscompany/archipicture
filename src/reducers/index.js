import {createStore, combineReducers} from 'redux';
import panel from './panel'
const reducers = combineReducers({
  panel,
})

const store = createStore(
  reducers,
);
module.exports = store;
