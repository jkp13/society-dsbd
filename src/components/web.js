import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './web.css';




class Pro extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    };
    render(){
        return(
            <div className="row px-5">
              <div className='col-12 col-md-6 col-lg-3 p-3'>
                <Card color='dark' style={{height:'420px'}} >
                  <img width="100%" src='assets/img/gym.png' alt="For example" />
                  <CardBody>
                  <CardTitle tag="h5"><a href='https://github.com/webd-iitbbs/gymkhana-iitbbs' style={{color:'#fe3265'}}>Gymkhana, IIT BBS</a></CardTitle>
                    <CardText style={{color:'white'}}>It contains information about the gymkhana like what is it, its constitution, the student activity centre, the happenings at the fests, societies of the gymkhana and much more.. !</CardText>
                    <div className='row'>
                    <Button outline color="danger" className='col-1 mx-1 btn-sm'>js</Button>
                    <Button outline color="danger"className='col-3 mx-1 btn-sm' style={{fontSize :'11px'}} >bootstrap</Button>
                    <Button outline color="danger" className='col-2 mx-1 btn-sm'>php</Button>
                    
                    <Button outline color="danger" className='col-3 mx-1 btn-sm'>mysql</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-12 col-md-6 col-lg-3 p-3'>
                <Card color='dark' style={{height:'420px'}}>
                  <img width="100%" src='assets/img/cdc.jpg' alt="For example" />
                  <CardBody>
                  <CardTitle tag="h5"><a href='https://github.com/webd-iitbbs/cdc-iitbbs' style={{color:'#fe3265'}}>CDC-IITBBS</a> </CardTitle>
                    <CardText style={{color:'white'}}>This website highlights the placement details of our campus and helps the students register to companies for their internships and Placements</CardText>
                    <div className='row'>
                    <Button outline color="danger" className='col-1 mx-1 btn-sm mb-1'>js</Button>
                    <Button outline color="danger" className='col-4 mx-1 btn-sm mb-1'>php-laravel</Button>
                    <Button outline color="danger" className='col-2 mx-1 btn-sm mb-1' style={{fontSize :'10px'}}>mysql</Button>
                    
                    <Button outline color="danger mx-1 btn-sm mb-1">bootstrap</Button>
                    
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-12 col-md-6 col-lg-3 p-3'>
                <Card color='dark' style={{height:'420px'}}>
                  <img width="100%" src='assets/img/acad.png' alt="For example"/>
                  <CardBody>
                  <CardTitle tag="h5"><a href='https://github.com/webd-iitbbs/Academic-Council' style={{color:'#fe3265'}} >Acad council</a></CardTitle>
                    <CardText style={{color:'white'}}>This website contains information which is much needed by campus dwellers for academic purposes.</CardText>
                    <div className='row'>
                    <Button outline color="danger" className='col-2 mx-1 btn-sm'>react</Button>
                    <Button outline color="danger" className='col-3 mx-1 btn-sm'>firebase</Button>
                    <Button outline color="danger" className='col-3 mx-1 btn-sm' >wiki.js</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-12 col-md-6 col-lg-3 p-3' >
                <Card color='dark' style={{height:'420px'}} >
                  <img width="100%" src='assets/img/ipl.png' alt="For example" />
                  <CardBody>
                  <CardTitle tag="h5"><a href='https://github.com/webd-iitbbs/ProjectIPL' style={{color:'#fe3265'}}>Intense Prediction League (in collaboration with Ashvamedha) </a></CardTitle>
                    <CardText style={{color:'white'}}>It is a fantasy league organised during the IPL season in association with Ashvamedha, the sports fest of IIT Bhubaneswar.</CardText>
                    <div className='row'>
                    <Button outline color="danger" className='col-2 mx-1 btn-sm'>js</Button>
                    <Button outline color="danger" className='col-3 mx-1 btn-sm' style={{fontSize :'10px'}}>bootstrap</Button>
                    <Button outline color="danger" className='col-3 mx-1 btn-sm'>firebase</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
        );
    }
}





class Web extends Component{
    constructor(props){
        super(props);
        this.state={
          datas : [
            {
              id: 0,
              title: 'Local OLX',
              image: 'assets/img/olx.jpg',
              
              text: 'The students can sell their belongings among students who want it at a lower price',
            },
            {
              id: 1,
              title: 'Intra Quora',
              image: 'assets/img/quora.jpg',
             
              text: 'Where students can ask questions on any topic about the institute and answer the questions posted by their peers.',
            },
            {
              id: 2,
              title: 'Live Quiz Multiplayer',
              image: 'assets/img/quiz.jpg',
              
              text: 'A quizzing app where you can take up quizzes and challenge your friends.',
            },
            {
              id: 3,
              title: 'Travel Companion',
              image: 'assets/img/travel.jpg', 
              
              text: 'You can share the fare with the fellow students who wish take the same path of journey, thereby making their travel economical.',
            },
            {
              id: 4,
              title: 'Website for Web and Design Society',
              image: 'assets/img/societywebsite.jpg',
              
              text: 'This is it, LOL ! We would be adding a lot more features in it.',
            },
           ]
        };
    };

    render(){
      const heightstyle = {

      }
        const list = this.state.datas.map((data) => {
            return(
                <div className='col-12 col-md-6 col-lg-3 p-3' key={data.id}>
                <Card color='dark' className='cardht'  style={{height:'430px'}}>
                  <img width="100%" src={data.image} alt="For example" height="210px" />
                  <CardBody>
                  <CardTitle tag="h5" ><a href='#' style={{color:'#fe3265'}}>{data.title}</a></CardTitle>
                    <CardText style={{color:'white'}}>{data.text}</CardText>
                    <div className='row hmm'>
                    <Button outline color="danger" className=' col-2 col-sm-6 offset-md-1 col-md-5 col-lg-2 ml-1 my-1 btn-sm' style={{fontSize :'11px'}} >React js</Button>
                    <Button outline color="danger"className=' col-3 col-sm-6 offset-md-1 col-md-5 col-lg-3 ml-1 my-1 btn-sm' style={{fontSize :'11px'}}>Node js</Button>
                    <Button outline color="danger" className='col-3  col-sm-6 offset-md-1 col-md-5 col-lg-3 ml-1 my-1 btn-sm' style={{fontSize :'11px'}} >Express js</Button>
                   
                    <Button outline color="danger" className=' col-3 col-sm-6 offset-md-1 col-md-5 col-lg-3 ml-1 my-1 btn-sm' style={{fontSize :'10px'}} >Mongo DB</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          });
        return(
            <div style={{backgroundColor:'#191919'}}>
              <div className='row align-items-center' style={{height :'100vh'}} >
                <div className='col-12 col-lg-6'>
                  <h1 className='d-flex justify-content-center' style={{color:'#fe3265',fontSize:'55px'}}>SHOW CASE</h1>
                </div>
                <div className='col-12 col-lg-6'>
                <img width="100%" src='assets/img/showcase.jpg' alt="For example" />
                </div>
              </div>
              <div className='row'>
                <h1 className="col-12 d-flex justify-content-center " style={{color:'#fe3265'}}>Ongoing Projects</h1>
                </div>
                <div className="row px-5">
                {list}
                </div>
                <div className='row'>
                <h1 className="col-12 d-flex justify-content-center " style={{color:'#fe3265'}}>Completed Projects</h1>
                </div>
                <Pro />
            </div>
        );
    }
}
export default Web;

