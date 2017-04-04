import React,{Component} from 'react'
import Header from './Header'
import Pay from './Pay'



class Home extends React.Component{
  render(){
    return(

        <div className='home'>
          <Header/>
          <div className='mywarp'>
            {this.props.children}
          </div>
          <Pay/>
        </div>

    )
  }
}

export default Home;
