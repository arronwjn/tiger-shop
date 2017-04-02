import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {curriculum} from '../actions/curriculum'
import store from '../store'


class Index extends React.Component{
  componentWillMount(){
    axios.get('http://tiger.haoduoshipin.com/cats')
    .then(res=>{
      console.log(res)
      this.props.curriculum(res.data.cats)
    })
  }
  render(){
    console.log('index',this.props.All)
    return(
      <div className='index'>
        <h4>已发布课程</h4>
        <div className='list'>
          {this.props.All.map((item,index)=>
            <div key={Math.random()} >
              <div className='curriculum'>
                <h3>{item.name}</h3>
              </div>
            </div>)}
        </div>
      </div>

    )
  }
}

let mapStateToProps = (state)=>({
  All:state.All
})



export default connect(mapStateToProps,{curriculum})(Index);
