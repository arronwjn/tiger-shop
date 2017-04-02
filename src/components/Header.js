import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import store from '../store'
import axios from 'axios'

class Header extends React.Component{
  handleClick(){
    console.log('aaa')

    axios.get('http://tiger.haoduoshipin.com/user/logout')
    .then(res=>{
      alert(res.data.msg)
      store.dispatch({type:'SignIn',userId:'',userName:''})
    })
    console.log('header',this.props.userName)
  }
  render(){
    console.log('header',this.props.userName)
    return(
        <header>
          <h3><Link to='/'>首页</Link></h3>
          <div className='header-right'>
            {this.props.userName?<p>{this.props.userName}</p>:<p><Link to='signin'>登录</Link></p>}
            {this.props.userName?<p onClick={this.handleClick.bind(this)}>退出</p>:<p><Link to='signup'>注册</Link></p>}
          </div>
        </header>
    )
  }
}

let mapStateToProps = (state)=> {
  return { userId:state.user.userId,userName:state.user.userName }
}
export default connect(mapStateToProps)(Header)
