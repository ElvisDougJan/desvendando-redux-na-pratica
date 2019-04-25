// Todos os reducers precisam ser "combinados" para que o Redux altere a store

import { combineReducers } from 'redux'
import course from './course'

export default combineReducers({
  course
})
