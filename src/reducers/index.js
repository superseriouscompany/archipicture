import {createStore, combineReducers} from 'redux';
import panel from './panel'
import infra from './infra'
const reducers = combineReducers({
  panel,
  infra,
})

const store = createStore(
  reducers,
);
module.exports = store;
