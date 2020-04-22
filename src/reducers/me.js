import { USER_LOADING, USER_LOGIN} from '../actions/actionUsers'

const initialValues = {}

const me = (state = initialValues, action) => {
    switch(action.type) {
        /* case USER_LOADING:
            return {...state, loading: true} */
        case USER_LOGIN:
            return {...action.payload}
         default:
            return state
    }
 }
   
  export default me