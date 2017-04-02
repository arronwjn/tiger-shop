import {combineReducers} from 'redux';

 function signin(state={userId:'',userName: ''},action){
    switch(action.type) {
      case 'SignIn':
        console.log(action)
        return Object.assign({},{userName:action.userName,userId:action.userId})
      default:
        return state
    }
  }

export default signin;
