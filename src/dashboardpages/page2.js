import React from 'react';

import {Link} from 'react-router-dom';

function Week1() {
  return (
    <div class='row'>
    <div className='products' class='col-10 offset-2' style={{height:'100vh'}}>
      <div>
                  <h1 style={{color:'#fe3265',fontSize:'2.5vw'}}><u>TOPICS:</u></h1><br/>
                  <ul class="fa-ul pl-4">
                    <li style={{color:'white',fontSize:'2vw'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>Intro to Web Development</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>Web</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'white',fontSize:'2vw'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>Version control using Git</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>GitHub</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'white',fontSize:'2vw'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>HTML</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'1.5vw'}}><a href="#" style={{color:'#00cdb3'}}>HTML</a></li>
                      </ul>
                    <br/>

                  </ul>
                  <br/>
                  <p style={{color:'white',fontSize:'2vw'}}>Check your understanding!</p>
                  <button type="button" class="btn btn-outline-info" >Weekly Assessment</button>
                </div>
    </div>
    </div>
  );
}

export default Week1;