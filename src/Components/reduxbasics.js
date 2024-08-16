
import {createStore} from "redux" 


const initialState = {

    amount: 0,
    mobileNumber : null,
    name : null
} 


function reducer(state=initialState,action){

    switch(action.type){
  case "deposit" :
     return {...state,amount:state.amount+ +action.payload}
 
    case "withdraw" :
     return {...state,amount:state.amount  -  +action.payload}
     case "name" :
        return {...state,name:action.payload} 
        case "mobile" :
            return {...state,mobileNumber:action.payload} 
        default :
        return state
    }  
}
const store = createStore(reducer);
store.dispatch({type:"deposit",payload:200})
console.log(store.getState())

store.dispatch({type:"withdraw",payload:100})
console.log(store.getState())

store.dispatch({type:"name",payload:"Tejaswi"})
console.log(store.getState())

store.dispatch({type:"mobile",payload:1213141516})
console.log(store.getState())




export default store ;