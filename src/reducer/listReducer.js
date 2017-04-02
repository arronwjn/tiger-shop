import {combineReducers} from 'redux';

 function curriculum(state=[],action){
    switch(action.type) {
      case 'Curriculum-All':
        console.log('reducer')
        return action.All
      default:
        return state
    }
  }

export default curriculum;
