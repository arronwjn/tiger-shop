import React,{Component} from 'react'
import Header from './Header'



class Home extends React.Component{
  render(){
    return(

        <div className='home'>
          <Header/>
          <div className='mywarp'>
            {this.props.children}
          </div>
        </div>

    )
  }
}

export default Home;
