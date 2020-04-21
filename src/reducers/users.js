import { ADD_NEW_USER, USER_LOADING, FAIL_ITEM} from '../actions/actionUsers'

const initialValues = {
    loading: false,
    items: []
}

const users = (state = initialValues, action) => {
   switch(action.type) {
        case USER_LOADING:
            return {...state, loading: true}
        case ADD_NEW_USER: 
            return { ...state, items:  [...state.items, action.payload ], loading: false}
        case FAIL_ITEM: 
            return { ...state, loading: false}
        default:
            return state
   }
}
  
 export default users