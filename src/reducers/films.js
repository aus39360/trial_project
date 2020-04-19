import { ADD_NEW_CARD, GET_ALL_CARD, CARD_LOADING, DELETE_CARD, EDIT_ITEM, FAIL_ITEM } from '../actions/actionFilms'

const initialState = {
    loading: false,
    items: []
}


const films = ( state = initialState, action) => {
    switch(action.type) {
        case CARD_LOADING: 
            return { ...state, loading:true }
        case GET_ALL_CARD:
            return { ...state, items:  [...action.payload ], loading: false}
        case ADD_NEW_CARD:
            return { ...state, items:  [...state.items, action.payload ], loading: false}
        case DELETE_CARD:
            return {...state, items: state.items.filter((i) => i.id !== action.payload.id)}
        case EDIT_ITEM:
            return {...state, items: state.items.map((i)=>{ 
                if(i.id === action.payload.id) {
                    return {...i, name: action.payload.name, description: action.payload.description, color: action.payload.color}
                }
                return i
            })}
        case FAIL_ITEM: 
            return { ...state, loading: false}
        default:
            return state
    }
}

export default films