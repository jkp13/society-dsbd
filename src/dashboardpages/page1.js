import React from 'react';
import * as IoIcons from 'react-icons/io';
import './pages.css'

function Home() {
  return (
    <div className='home tot' style={{backgroundColor:'#191919', color: '#fe3265'}}>
      
      <div class='row'>
          <div class='col-10 offset-2'>
          <h1>WEEK 1</h1>
          </div>
        <div class='col-10 offset-3'>
            <h2>Topics:</h2>
        </div>
        <div class='col-10 offset-3'>
            <span><IoIcons.IoIosArrowDroprightCircle style={{ color: '#fe3265' }}/></span> Introduction to Web Development
        </div>
        
      </div>
    </div>
  );
}

export default Home;