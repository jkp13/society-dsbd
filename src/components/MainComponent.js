import React, { Component } from 'react';

import Design from './design';
import Web from './web';
import { Switch, Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import Dshbrd from './dashboardmain';


import Project from './webs'





class Main extends Component{
  constructor(props){
   super(props);
   this.state={

   }
}
   render() {
       return(
      <div style={{backgroundColor:'#191919'}}>
        
         
      
      <Dshbrd />
      
      
      
      
      </div> 
       )
   }
  

}

export default Main;

  