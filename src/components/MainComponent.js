import React, { Component } from 'react';

import Design from './design';
import Web from './web';
import { Switch, Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';
import Final from './events';




class Main extends Component{
  constructor(props){
   super(props);
   this.state={

   }
}
   render() {
       return(
      <div style={{backgroundColor:'#191919'}}>
        
      <Web />
      <Design />
      
      
      
      </div> 
       )
   }
  

}

export default Main;
  