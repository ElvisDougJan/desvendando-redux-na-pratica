import { createStore } from 'redux'
import rootReducer from './reducers'

// "Pegando" os reducers após serem "combinados" pela 
// função combineReducers no arquivo index.js da pasta reducers
const store = createStore(rootReducer) 

export default store