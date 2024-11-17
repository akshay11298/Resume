import React from 'react';
import './resume.css';
import {FaExclamationCircle} from 'react-icons/lib/fa';
import {IoAndroidGlobe} from 'react-icons/lib/io';
import {workExperience} from "./WorkExperience";
import {getCertificates} from "./Certificates";

export class Resume extends React.Component {

    componentDidMount() {
        document.getElementsByTagName("header")[1].scrollIntoView();
    }

    handleContentChange = (index) => {
        this.props.onContentChange(index);
    };

    render() {
        return (
            <div>
                <header>
                    <h1 className={'font-tarsus'}>Resume</h1>
                </header>
                <div className={'row'}>
                    <div className={'col-md-9 col-sm-12 col-xs-12'}>
                        <hr style={{borderWidth: '3px'}}/>
                        <div className={'row'}>
                            <button
                                type={'button'}
                                className={'btn about-me font-tarsus'}
                                style={{backgroundColor: '#E83556', opacity: '1'}}
                                disabled={'disabled'}
                            >
                                <h5>
                                    Professional <br/> Info
                                </h5>
                            </button>
                            <div
                                className={
                                    'col-md-9 font-tarsus align-self-center text-justify'
                                }
                                style={{paddingLeft: '1em', fontSize: '1.1em'}}
                            >
                                Full Stack Developer with 5+ years of experience building scalable solutions in Java,
                                Node.js, UI5, and React. Holds a PGD-ABA from IIM Ahmedabad, specializing in Marketing
                                and Strategy Analytics. Proven ability to align technical solutions with business needs,
                                driving digital transformation through customer-centric design and data-driven insights.
                                Skilled in cloud architecture, microservices, and analytics, with a passion for
                                continuous improvement and cross-functional collaboration.
                            </div>
                        </div>
                        <hr style={{borderWidth: '3px'}}/>
                        <div className={'row'}>
                            <button
                                type={'button'}
                                className={'btn about-me font-tarsus'}
                                style={{backgroundColor: 'orange', opacity: '1'}}
                                disabled={'disabled'}
                            >
                                <h5>
                                    Work <br/> Experience
                                </h5>
                            </button>
                            <div
                                className={
                                    'col-md-9 font-tarsus align-self-center text-justify'
                                }
                                style={{paddingLeft: '1em', fontSize: '1.1em'}}
                            >
                                {workExperience.map((item, index) => (
                                    <div key={index}>
                                        <strong>{item.title}</strong>
                                        <br/>
                                        <em>{item.period.start} - {item.period.end}</em> <br/>
                                        <em>{item.organisation}</em> <br/>
                                        <hr/>
                                        {item.content}

                                        {index !== workExperience.length - 1 && <hr style={{borderWidth: '3px'}}/>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr style={{borderWidth: '3px'}}/>
                        <div className={'row'}>
                            <button
                                type={'button'}
                                className={'btn about-me font-tarsus'}
                                style={{backgroundColor: '#E83556', opacity: '1'}}
                                disabled={'disabled'}
                            >
                                <h5>
                                    Educational <br/> Info
                                </h5>
                            </button>
                            <div
                                className={
                                    'col-md-9 font-tarsus align-self-center text-justify'
                                }
                                style={{paddingLeft: '1em', fontSize: '1.1em'}}
                            >
                                <strong>SRM Institute of Science and Technology</strong>
                                <br/>
                                <em>2015 - 2019 (Anticipated)</em> <br/>
                                <em>B. Tech </em> <br/>
                                <em>Computer Science and Engineering</em> <br/>
                                <hr/>
                                In these three years of college, I have learnt a lot and have
                                worked on various projects. I have worked on Software
                                Development, Mobile Application Development, Web Development,
                                Cloud Technology and Blockchain Technology. I have participated
                                in several events. I received the first position in Spell Bee
                                Competition which was held in Innovate 2K15. My CGPA is 8.47
                                (till 6<sup>th</sup> semester)
                            </div>
                        </div>
                        <hr style={{borderWidth: '3px'}}/>
                        <div className={'row'}>
                            <button
                                type={'button'}
                                className={'btn about-me font-tarsus'}
                                style={{backgroundColor: 'orange', opacity: '1'}}
                                disabled={'disabled'}
                            >
                                <h5>
                                    Achievement <br/> & Courses
                                </h5>
                            </button>
                            <div
                                className={
                                    'col-md-9 font-tarsus align-self-center text-justify'
                                }
                                style={{paddingLeft: '1em', fontSize: '1.1em'}}
                            >
                                <strong>Courses</strong>
                                <ul>
                                    {getCertificates()}
                                </ul>
                                <hr style={{borderWidth: '1px'}}/>
                                <strong>Achievement</strong>
                                <ul>
                                    <li> Awarded for Excellent Performance in 2018 by SRM Institute of Science and
                                        Technology
                                    </li>
                                    <li> Global Rank 411 in Google Kickstart Round E 2018</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-3 col-sm-12 col-xs-12 side-info'}>
                        <div className={'row'}>
                            <div className={'col-md-12 col-sm-6 col-xs-6 icons'}>
                                <div className={'text-center'} style={{fontSize: '4em'}}>
                                    <FaExclamationCircle/>
                                </div>
                                <div className={'font-tarsus'}>
                                    <h4 className={'text-center'}>Skills</h4>
                                    <hr/>
                                    <ul>
                                        <li> Data Science</li>
                                        <li> Blockchain</li>
                                        <li> Web Development</li>
                                        <li> Cloud</li>
                                        <li> Database Management</li>
                                        <li> Networking</li>
                                        <li> Machine Learning (Basic)</li>
                                        <li> MS Office Suite</li>
                                        <li> Adobe Photoshop (Basic)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'col-md-12 col-sm-6 col-xs-6 icons'}>
                                <div className={'text-center'} style={{fontSize: '4em'}}>
                                    <IoAndroidGlobe/>
                                </div>
                                <div className={'font-tarsus'}>
                                    <h4 className={'text-center'}>Languages</h4>
                                    <hr/>
                                    <ul>
                                        <li> C/C++</li>
                                        <li> Java</li>
                                        <li> Python</li>
                                        <li> R</li>
                                        <li> JavaScript</li>
                                        <li> ReactJS</li>
                                        <li> React Native</li>
                                        <li> HTML/CSS</li>
                                        <li> SQL</li>
                                        <li> PHP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{borderWidth: '3px'}}/>
                <div className={'row'}>
                    <div className={'col-md-6 text-left'}>
                        <h4
                            onClick={() => this.handleContentChange(0)}
                            className={'navigation-link'}
                        >
                            <strong style={{fontSize: '1.2em'}}>←</strong> Home
                        </h4>
                    </div>
                    <div className={'col-md-6 text-right'}>
                        <h4
                            onClick={() => this.handleContentChange(2)}
                            className={'navigation-link'}
                        >
                            Projects <strong style={{fontSize: '1.2em'}}>→</strong>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
