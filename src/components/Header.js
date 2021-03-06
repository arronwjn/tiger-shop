import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import store from '../store'
import axios from 'axios'
import {signin} from '../actions/curriculum'

class Header extends React.Component{
  handleClick(){
    console.log('aaa')

    axios.get('http://tiger.haoduoshipin.com/user/logout')
    .then(res=>{
      // store.dispatch({type:'SignIn',userId:'',userName:''})
      let id='';
      let name='';
      this.props.signin(id,name)
    })
    console.log('header',this.props.userName)
  }
  componentWillMount(){
    var name=JSON.parse(localStorage.getItem('username'))
    var id=JSON.parse(localStorage.getItem('userId'))
    this.props.signin(id,name)
  }
  render(){
    console.log('header',this.props.userName)
    localStorage.setItem('username',JSON.stringify(this.props.userName))
    localStorage.setItem('userId',JSON.stringify(this.props.userId))
    return(
        <header>
          <h3><Link to='/'>首页</Link></h3>
          <div className='header-right'>
            {this.props.userName?<p><Link to={`center/${this.props.userName}`}>{this.props.userName}</Link></p>:<p><Link to='signin'>登录</Link></p>}
            {this.props.userName?<p onClick={this.handleClick.bind(this)}>退出</p>:<p><Link to='signup'>注册</Link></p>}
          </div>
        </header>
    )
  }
}

let mapStateToProps = (state)=> {
  return { userId:state.user.userId,userName:state.user.userName}
}
export default connect(mapStateToProps,{signin})(Header)
