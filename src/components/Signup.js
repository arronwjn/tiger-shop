import React,{Component} from 'react'
import axios from 'axios'
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {signup} from '../actions/curriculum'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'


class SignUp extends React.Component{
  constructor(){
    super();
    this.state = {
     userName: [],
     password: []
   };
  }

 handleUpdateInput(value){
   this.setState({
     userName: [
       value
     ],
   });
 };
 handleUpdateInputs(value){
   this.setState({
     password: [
       value
     ],
   });
 };
 handleSubmit(e){
   e.preventDefault()
   axios.post('http://tiger.haoduoshipin.com/user/signup',{username:`${this.state.userName}`,password:`${this.state.password}`})
   .then(res=>{
     console.log('res',res)
     this.props.signup(res.data.userId,res.data.user)
     hashHistory.push('/')
   })
 }
  render(){
    console.log('reducer',this.props.userName)
    return(
          <div className='signin'>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <MuiThemeProvider>
                  <div>
                    <label className='mima1'>用户名</label><AutoComplete
                      dataSource={this.state.userName}
                      hintText=" "
                      onUpdateInput={this.handleUpdateInput.bind(this)}
                    /><br/>
                  </div>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <div>
                    <label className='mima2'>密码</label><AutoComplete
                      dataSource={this.state.password}
                      hintText=" "
                      onUpdateInput={this.handleUpdateInputs.bind(this)}
                    /><br/>
                  </div>
                </MuiThemeProvider>
                <button>注册</button>
              </form>
          </div>

    )
  }
}


let mapStateToProps = (state)=> {
  return { userId:state.user.userId,userName:state.user.userName }
}
export default connect(mapStateToProps,{signup})(SignUp)
