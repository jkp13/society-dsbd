import React from 'react';

function Week2() {
  return (
    <div class='row'>
    <div className='products' class='col-10 offset-2' style={{height:'100vh'}}>
    <div>
                  <h1 style={{color:'#fe3265',fontSize:'2.5vw'}}><u>TOPICS:</u></h1><br/>
                  <ul class="fa-ul pl-4">
                    <li style={{color:'white',fontSize:'2vw'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>CSS</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Introduction</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Types of CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>CSS Background elements</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>CSS Borders</a></li>                        
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>CSS text styling and formatting</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Google Fonts</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Margin and Padding in CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Color Combination</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Advanced CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Mobile Responsiveness</a></li>
                      </ul>
                  </ul>

                  <br/>

                  <p style={{color:'white',fontSize:'2vw'}}>Check your understanding!</p>
                  <button type="button" class="btn btn-outline-info ">Weekly Assessment</button>
                </div>
    </div>
    </div>
  );
}

export default Week2;