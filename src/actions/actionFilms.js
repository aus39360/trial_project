import uuid from 'react-uuid'

export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const GET_ALL_CARD = 'GET_ALL_CARD'
export const CARD_LOADING = 'CARD_LOADING'
export const DELETE_CARD = 'DELETE_CARD'
export const EDIT_ITEM = 'EDIT_ITEM'
export const FAIL_ITEM = 'FAIL_ITEM'

const dataFromRequest =  [
    { id:'1', name:'Cats2', description:'lorem ca tate, action.payload ]ts hgjfk dohknd hchsjkc shdhcjckd;', color:'#c56cf0'},
    { id:'2', name:'Dogs', description:'lorem cats hgjfk dohknd hchsjkc shdhcjckd;', color:'#fffa65'},
    { id:'3', name:'Cats2', description:'lorem cats hgjfk dohknd hchsjkc shdhcjckd;', color:'#84817a'},
]

export const getAllCardActionCreator = () => {
    return (dispatch) => {
        dispatch(cardLoading())
        setTimeout(() => {
          // Yay! Can invoke sync or async actions with `dispatch`
          dispatch(getAllCard(dataFromRequest));
        }, 1000);
        //dispatch(cardLoading())
      };
}

export const addNewCardActionCreator = (data) => {
    return(dispatch, getState) => {
        dispatch(cardLoading())
        const state = getState()
        if(state.films.items.some(el => {
          return el.name === data.name
        })) {
          dispatch(failItem())
          alert('ERROR: failed name!')
        }else {
          setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(addNewCard({...data, id:uuid()}));
          }, 1000);
        }
      };
}

export const deleteItemActionCreator = (id) => {
    return(dispatch) => {
        setTimeout(() => {
          // Yay! Can invoke sync or async actions with `dispatch`
          dispatch(deleteItem(id));
        }, 1000);
      };
}


export const cardLoading = () => { return {type: CARD_LOADING}}
export const getAllCard = (data) => { return {type: GET_ALL_CARD, payload: data}}
export const addNewCard = (data) => { return {type: ADD_NEW_CARD, payload: data}}

export const deleteItem = (id) => {return{type: DELETE_CARD, payload: {id} }}

export const editItem = (data) => {return {type: EDIT_ITEM, payload: data}}

export const failItem = () => {return {type: FAIL_ITEM, payload: {error: 'error'}}}