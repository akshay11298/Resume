import React from 'react';
import SlideShow from './SlideShow';
import Nora from '../../img/Nora/index.jpeg';
import NBCC1 from '../../img/nbcc/employee.gif'
import NBCC2 from '../../img/nbcc/caterer.gif'
import NBCC3 from '../../img/nbcc/notification.gif'
import home from '../../img/Hostel management/home.jpg'
import search from '../../img/Hostel management/search.jpg'
import Advance from '../../img/MUA/Advanced settings.gif'
import SignIn from '../../img/MUA/Sign In animation.gif'
import send from '../../img/MUA/send.jpg'
import Receive from '../../img/MUA/Receive mails.jpg'

export class Projects extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h1 className={"font-tarsus"}>Projects</h1>
                </header>
                <hr style={{borderWidth:'3px'}}/>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[Nora]} />
                    </div>
                    <div className={'col-md-6 col-sm-12 col-xs-12 font-tarsus text-justify'}>
                        <h2>
                           Project 1
                        </h2>
                        <hr/>
                        <h3>Nora</h3>
                        <br/>
                        Nora is a personal assistant. The application is built using React Native and so can work on both iOS and Android.
                         The backend is built using Python and is hosted on Heroku where the knowledge of Nora is stored. I have built an API to access that knowledge.
                         The application hits the API with the message and then the message is processed on the server and the response is given back to the user in text as well as
                         speech format. In the later stage of this project, with a help from a classmate I integrated the application with IoT and was able to control one home device with the
                         help of Nora.
                    </div>
                </div>
                <hr style={{borderWidth:'3px'}}/>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[NBCC1,NBCC2,NBCC3]} />
                    </div>
                    <div className={'col-md-6 col-sm-12 col-xs-12 font-tarsus text-justify'}>
                        <h2>
                            Project 2
                        </h2>
                        <hr/>
                        <h3>Canteen Management System</h3>
                        <br/>
                        This project is a canteen management system which I developed completely on my own when I was interning at NBCC (India) Ltd. This application is built using JavaFx and so
                         can run on any platform. This project focuses on making the process of ordering food easier and more transparent.
                    </div>
                </div>
                <hr style={{borderWidth:'3px'}}/>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[SignIn,Advance,send,Receive]} />
                    </div>
                    <div className={'col-md-6 col-sm-12 col-xs-12 font-tarsus text-justify'}>
                        <h2>
                            Project 3
                        </h2>
                        <hr/>
                        <h3>Mail User Agent</h3>
                        <br/>
                        This is another application I built using JavaFx. Its a mailing agent software, which allows a user to send and receive mails. This application is not mail server dependent.
                         It works for all available mail servers like, gmail, yahoo etc.
                    </div>
                </div>
                <hr style={{borderWidth:'3px'}}/>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[home,search]} />
                    </div>
                    <div className={'col-md-6 col-sm-12 col-xs-12 font-tarsus text-justify'}>
                        <h2>
                            Project 4
                        </h2>
                        <hr/>
                        <h3>Hostel Management System</h3>
                        <br/>
                        This application was also built using JavaFx. It is a common hostel managemnt system which allows the warden to enroll a student, modify its details and remove a student's entry.
                    </div>
                </div>
            </div>
        );
    }
}