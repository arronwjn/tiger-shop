import React,{Component} from 'react'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';


class Pay extends React.Component{
  render(){
    return(

        <div className='pay'>
          <MuiThemeProvider>
            <ActionAddShoppingCart style={{width:'9vh',height:'9vh',color:'#fff'}}/>
          </MuiThemeProvider>
          <button>结算</button>
        </div>

    )
  }
}

export default Pay;
