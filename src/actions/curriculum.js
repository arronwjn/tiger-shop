import axios from 'axios'
import store from '../store'

export function curriculum(title){
  return dispatch=>{
      console.log('action');
      dispatch({type:'Curriculum-All',All:title})
  }
}


export function signin(userId,userName){
  return dispatch=>{
    console.log('signin')
    dispatch({type:'SignIn',userId,userName})
  }
}


export function signup(userId,userName){
  return dispatch=>{
    dispatch({type:'SIGNUP',userId,userName})
  }
}
