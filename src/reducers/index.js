import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import mid from './mid'
const todolist = combineReducers({
  todos,  
  visibilityFilter
})
export default todolist
