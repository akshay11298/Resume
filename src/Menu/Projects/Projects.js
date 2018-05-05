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
import login from '../../img/MUA/login.jpg'
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
                <row>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[Nora]} />
                    </div>
                </row>
                <hr style={{borderWidth:'3px'}}/>
                <row>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[NBCC1,NBCC2,NBCC3]} />
                    </div>
                </row>
                <hr style={{borderWidth:'3px'}}/>
                <row>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[SignIn,Advance,login,send,Receive]} />
                    </div>
                </row>
                <hr style={{borderWidth:'3px'}}/>
                <row>
                    <div className={'col-md-6 col-sm-12 col-xs-12'}>
                        <SlideShow items={[home,search]} />
                    </div>
                </row>
            </div>
        );
    }
}