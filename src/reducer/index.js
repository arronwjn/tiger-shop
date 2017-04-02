import {combineReducers} from 'redux';
import curriculum from './listReducer'
import user from './signinReducer'

// function aaa(state=[],action) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }
//
// function bbb(state='test',action) {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  All:curriculum,
  user:user
 })

 // const rootReducer=function curriculum(state=[],action){
 //    switch(action.type) {
 //      case 'Curriculum-All':
 //        console.log('reducer')
 //        return {All:action.All}
 //      default:
 //        return state
 //    }
 //  }

export default rootReducer;
