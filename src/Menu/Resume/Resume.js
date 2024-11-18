import React from 'react';
import './resume.css';
import {FaExclamationCircle} from 'react-icons/lib/fa';
import {getWorkExperience} from "./WorkExperience";
import {getCertificates} from "./Certificates";
import {getAchievements} from "./Achievements";
import {getEducationInfo} from "./EducationInfo";
import {getSkills} from "./Skills";

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
                                {getWorkExperience()}
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
                                {getEducationInfo()}
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
                                {getCertificates()}
                                <hr style={{borderWidth: '1px'}}/>
                                {getAchievements()}
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
                                    {getSkills()}
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
