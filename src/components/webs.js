import React , {Component} from 'react';
import './webs.css'

class Ongoingprojects extends Component{
  constructor(props){
    super(props);
    this.state={
      

    };
  };
  render(){
   
    return(
      <React.Fragment>
        <div className='row'>
          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title" style={{fontSize:'20px'}}>Website for Web and Design Society</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#societywebsite">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#societywebsite">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/societywebsite1.jpg" class='img-fluid w-100' alt=""/>
                </div>
              </div>
          </div>


          <div  class="modal"  id="societywebsite"  tabindex="-1"  role="dialog"  aria-labelledby="societywebsite"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/societywebsite.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Website for Web and Design Society</h3>
                      <p class="project-detail-content">This is it, LOL ! We would be adding a lot more features in it.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Express.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Node.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'13px'}}>Mongo DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="#" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="#"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="#"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>












          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Local olx</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#olx">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#olx">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/olx.jpg" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>



          <div  class="modal"  id="olx"  tabindex="-1"  role="dialog"  aria-labelledby="olx"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/olx.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Local olx</h3>
                      <p class="project-detail-content">The students can sell their belongings among students who want it at a lower price.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Express.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Node.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'13px'}}>Mongo DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="#" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="#"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="#"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Intra Quora</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#quora">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#quora">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/quora.jpg" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>

          <div  class="modal"  id="quora"  tabindex="-1"  role="dialog"  aria-labelledby="quora"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/quora.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Intra Quora</h3>
                      <p class="project-detail-content">Where students can ask questions on any topic about the institute and answer the questions posted by their peers.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Express.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Node.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'13px'}}>Mongo DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="#" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="#"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="#"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Live Quiz Multiplayer</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#quiz">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#quiz">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/quiz1.jpg" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>

          <div  class="modal"  id="quiz"  tabindex="-1"  role="dialog"  aria-labelledby="quiz"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/quiz.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Live Quiz Multiplayer</h3>
                      <p class="project-detail-content">A quizzing app where you can take up quizzes and challenge your friends.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Express.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Node.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'13px'}}>Mongo DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="#" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="#"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="#"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Travel Companion</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#travel">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#travel">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/travel.jpg" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>

          <div  class="modal"  id="travel"  tabindex="-1"  role="dialog"  aria-labelledby="travel"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/travel.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Travel Companion</h3>
                      <p class="project-detail-content">You can share the fare with the fellow students who wish take the same path of journey, thereby making their travel economical.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Express.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Node.js</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'13px'}}>Mongo DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="#" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="#"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="#"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




          




        </div>

      </React.Fragment>
    )
  }
}



class Completedprojects extends Component{
  constructor(props){
    super(props);
    this.state={
      

    };
  };
  render(){
   
    return(
      <React.Fragment>
        <div className='row'>
          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Gymkhana, IIT BBS</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#gymkhana">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#gymkhana">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/gym.png" class='img-fluid w-100' alt=""/>
                </div>
              </div>
          </div>


          <div  class="modal"  id="gymkhana"  tabindex="-1"  role="dialog"  aria-labelledby="gymkhana"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/gym.png" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Gymkhana, IIT BBS</h3>
                      <p class="project-detail-content">It contains information about the gymkhana like what is it, its constitution, the student activity centre, the happenings at the fests, societies of the gymkhana and much more.. !.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>PHP</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>mysql</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Bootstrap</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span >JavaScript</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="https://github.com/webd-iitbbs/gymkhana-iitbbs" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="http://gymkhana-iitbbs.herokuapp.com/"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="http://gymkhana-iitbbs.herokuapp.com/"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>












          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">CDC-IITBBS</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#cdc">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#cdc">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/cdc.jpg" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>



          <div  class="modal"  id="cdc"  tabindex="-1"  role="dialog"  aria-labelledby="cdc"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/cdc.jpg" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">CDC-IITBBS</h3>
                      <p class="project-detail-content">This website highlights the placement details of our campus and helps the students register to companies for their internships and Placements.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>Bootstrap</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>MySql</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span>JavaScript</span>
                            </div>
                          </div>
                          <div class="col-3 col-sm-3 col-md-3">
                            <div class="tech">
                              <span style={{fontSize:'12px'}}>PHP-laravel</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="https://github.com/webd-iitbbs/cdc-iitbbs" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="http://cdciitbbs.epizy.com/public/"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="http://cdciitbbs.epizy.com/public/"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title">Acad council</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#acad">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#acad">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/acad.png" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>

          <div  class="modal"  id="acad"  tabindex="-1"  role="dialog"  aria-labelledby="acad"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/acad.png" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Acad council</h3>
                      <p class="project-detail-content">This website contains information which is much needed by campus dwellers for academic purposes.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>React.js</span>
                            </div>
                          </div>
                          <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>Firebase</span>
                            </div>
                          </div>
                          <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>Wiki.js</span>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="https://github.com/webd-iitbbs/Academic-Council" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="http://academiccouncil-iitbbs.web.app/"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="http://academiccouncil-iitbbs.web.app/"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





          <div className='col-lg-4 my-3 align-self-center'>
          <div class="project px-4">
                <div class="project-content">
                  <div class="project-heading">
                    <h3 class="project-heading-title" style={{fontSize:'15px'}}>Intense Prediction League (in collaboration with Ashvamedha)</h3>
                    <p></p>
                  </div>
                  <div class="learn-more">
                    <button class="btn-hover color-2 btn-lg d-none d-lg-inline-block" data-toggle="modal" data-target="#ipl">Learn More</button>
                    <button class="btn-hover color-2 btn-sm d-inline-block d-lg-none" data-toggle="modal" data-target="#ipl">Learn More</button>
                  </div>
                </div>
                <div class="project-img">
                  <img src="assets/img/ipl.png" class='img-fluid' alt=""/>
                </div>
              </div>
          </div>

          <div  class="modal"  id="ipl"  tabindex="-1"  role="dialog"  aria-labelledby="ipl"  aria-hidden="true"  >
                <div class="modal-contents">
                  <div class="modal-contents-data">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="assets/img/ipl.png" class='img-fluid'alt="" />
                      </div>
                      
                    </div>
                    <button  type="button"  class="close"  data-dismiss="modal"  aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="project-detail">
                      <h3 class="project-detail-title">Intense Prediction League (in collaboration with Ashvamedha)</h3>
                      <p class="project-detail-content">It is a fantasy league organised during the IPL season in association with Ashvamedha, the sports fest of IIT Bhubaneswar.</p>
                      <div class="container project-technology">
                        <div class="row justify-content-center text-center">
                        <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>JavaScript</span>
                            </div>
                          </div>
                          <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>Firebase</span>
                            </div>
                          </div>
                          <div class="col-4 col-sm-4 col-md-3">
                            <div class="tech">
                              <span>Bootstrap</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="view">
                        <div class="git">
                          <a href="https://github.com/webd-iitbbs/ProjectIPL" ><i class="fab fa-github"></i></a>
                        </div>
                        <a href="https://iplfantasyleague-ashvamedha.web.app/"  class="btn-hover color-2 btn-lg d-none d-lg-inline-block">View Live</a>
                        <a href="https://iplfantasyleague-ashvamedha.web.app/"  class="btn-hover color-2 btn-sm d-inline-block d-lg-none">View Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




        </div>

      </React.Fragment>
    )
  }
}

class Project extends Component{
  render(){
    return(
      <React.Fragment>
        <div className='row align-items-center' style={{height :'100vh'}} >
                <div className='col-12 col-lg-6'>
                  <h1 className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'55px'}}>SHOW CASE</h1>
                </div>
                <div className='col-12 col-lg-6'>
                <img width="100%" src='assets/img/showcase.jpg' alt="For example" />
                </div>
              </div>
        <div class='row'>
          <div class='col-12'>
          <h1 className="col-12 d-flex justify-content-center " style={{color:'#fe3265'}}>Ongoing Projects</h1>
          </div>
          <div class='col-12'>
            <Ongoingprojects />
          </div>
          <div class='col-12'>
          <h1 className="col-12 d-flex justify-content-center " style={{color:'#fe3265'}}>Completed Projects</h1>
          </div>
          <div class='col-12'>
            <Completedprojects />
          </div>

        </div>
      </React.Fragment>
    )
  }
}
export default Project
