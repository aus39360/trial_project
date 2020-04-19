const initialValues = [
    {
        name:"Huy",
    },
    {
        name:"Zalupa",
    }
]

const users = (state = initialValues, action) => {
   switch(action.type) {
       case 'TRY_TO_LOGIN': 
        return [...action.payload]
    
   }
    return state
}
  
 export default users