import { combineReducers } from 'redux'
import users from './users'
import films from './films'
import me from './me'


export default combineReducers({
    users, films, me
})
