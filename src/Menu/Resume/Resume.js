import React from 'react';
import './resume.css'

    export class Resume extends React.Component{
    render(){
        return(
            <div>
                <header>
                <h1 className={"font-tarsus"}>RESUME</h1>
                </header>
                <div className={'row'}>
                    <div className={'col-md-9 col-sm-12'}>
                        <hr style={{borderWidth:'3px'}}/>
                        <div className={'row'}>
                            <div className={'circle col-md-3'} style={{backgroundColor:'orange'}}>
                                <div className={'font-tarsus'}><strong>Professional <br/> Info</strong></div>
                            </div>
                            <div className={'col-md-9 font-tarsus align-self-center'} style={{paddingLeft:'1em', fontSize:'1.1em'}}>
                                I'm a hard working student, who is currently in 6<sup>th</sup> semester. I am pursuing Computer Science. My current onjective is to gain an entry level position
                                 to learn and to grow within an enterprise. I am extremely hard working and can manage to accomplish anything once I set my mind to it. I have experience in web
                                development, application development (mobile as well as computer) and machine learning as well.
                            </div>
                        </div>
                        <hr style={{borderWidth:'3px'}}/>
                        <div className={'row'}>
                            <div className={'circle col-md-3'} style={{backgroundColor:'#E83556'}}>
                                <div className={'font-tarsus'}><strong>Work <br/>Experience</strong></div>
                            </div>
                            <div className={'col-md-9 font-tarsus align-self-center'} style={{paddingLeft:'1em', fontSize:'1.1em'}} >
                               <strong>React Native Intern</strong><br/>
                                <em>11 December 2017 - 22nd January 2018</em> <br/>
                                <hr/>
                                I interned as a React Native developer in the organisation. I worked on building cross platform applications using React Native.
                                This was a great working experience and the technology was new to me so it provided me a good learning curve as well.
                                We had two tasks at hand:
                                <ul>
                                    <li> Shift one of the existing apps from Ionic Framework to React Native</li>
                                    <li> Create a new EPOD (Electronic Proof of Delivery) application</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-3 col-sm-12'}>
                        {/*SKilleset side small column*/}
                    </div>
                </div>
            </div>
        );
    }
}