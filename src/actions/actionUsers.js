import uuid from 'react-uuid'

export const ADD_NEW_USER = 'ADD_NEW_USER'
export const USER_LOADING = 'USER_LOADING'
export const FAIL_ITEM = 'FAIL_ITEM'
export const USER_LOGIN = 'USER_LOGIN'

/* export const tryToLoginActionCreator = (data) => {
    return (dispatch, getState) => {
        let users = localStorage.users
        users = users ? JSON.parse(users) : []
        users = [...users, data]
        localStorage.users = JSON.stringify(users)
        const finalUsers = JSON.parse(localStorage.users)
        dispatch(tryToLogin(finalUsers))
      }
} */
export const addNewUserActionCreator = (data) => {
  return (dispatch, getState) => {
    const state = getState()
    
    if(state.users.items.some(el=> {
        return el.name === data.name && el.password !==data.password
    })) {
      alert('Пользователь с таким именем уже существует')
      dispatch(failItem())
    } else if(state.users.items.some(el=> {
        return el.name === data.name && el.password ===data.password
    })) {
      setTimeout(()=> {
        dispatch(userLogin(data))
      }, 1000)
    }else {
      dispatch(userLoading())
      setTimeout(()=> {
        dispatch(addNewUser({...data, id:uuid()}))
        dispatch(userLogin(data))
      }, 1000)
    }
  }
}

export const userLoading = () => {return {type: USER_LOADING}}
export const addNewUser = (data) => { return {type: ADD_NEW_USER, payload: data}}
export const failItem = () => {return {type: FAIL_ITEM, payload: {error: 'error'}}}
export const userLogin = (data) => {return {type: USER_LOGIN, payload: data}}