const TRY_TO_LOGIN = 'TRY_TO_LOGIN'

export const tryToLoginActionCreator = (data) => {
    return (dispatch, getState) => {
        let users = localStorage.users
        users = users ? JSON.parse(users) : []
        users = [...users, data]
        localStorage.users = JSON.stringify(users)
        const finalUsers = JSON.parse(localStorage.users)
        dispatch(tryToLogin(finalUsers))
      }
}


export const tryToLogin = (data) => { return {type: TRY_TO_LOGIN, payload: data}}