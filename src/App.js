import React,{Component} from 'react'
import {Router,Route,browserHistory,hashHistory,Redirect,IndexRoute} from 'react-router';
import  Home  from './components/Home';
import Index from './components/Index';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Center from './components/Center';
import   './main.css'
import {connect} from 'react-redux'


class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
            <Route path='signin' component={SignIn}/>
            <Route path='signup' component={Signup}/>
            <Route path='center/:username'  component={Center}/>
          </Route>
        </Router>
      </div>
    )
  }
}

let mapStateToProps = (state)=> {
  return { userId:state.user.userId,userName:state.user.userName}
}
export default connect(mapStateToProps)(App)
