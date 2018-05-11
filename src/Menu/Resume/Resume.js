import React from 'react';
import './resume.css';
import { FaExclamationCircle } from 'react-icons/lib/fa';
import { IoAndroidGlobe } from 'react-icons/lib/io';

export class Resume extends React.Component {
  componentDidMount() {
      document.getElementsByTagName("header")[1].scrollIntoView();
  }

  handleContentChange=(index)=>{
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
            <hr style={{ borderWidth: '3px' }} />
            <div className={'row'}>
              <button
                type={'button'}
                className={'btn about-me font-tarsus'}
                style={{ backgroundColor: '#E83556', opacity: '1' }}
                disabled={'disabled'}
              >
                <h5>
                  Professional <br /> Info
                </h5>
              </button>
              <div
                className={
                  'col-md-9 font-tarsus align-self-center text-justify'
                }
                style={{ paddingLeft: '1em', fontSize: '1.1em' }}
              >
                I'm a passionate computer science student, studying in the 6<sup>
                  th
                </sup>{' '}
                semester. My objective is to gain an entry level position to
                learn and grow within an enterprise. I am hard working and can
                manage to accomplish anything once I set my mind on it. I have
                experience in web development, application development (mobile
                as well as computer) and machine learning. I also like to
                explore new technology.
              </div>
            </div>
            <hr style={{ borderWidth: '3px' }} />
            <div className={'row'}>
              <button
                type={'button'}
                className={'btn about-me font-tarsus'}
                style={{ backgroundColor: 'orange', opacity: '1' }}
                disabled={'disabled'}
              >
                <h5>
                  Work <br /> Experience
                </h5>
              </button>
              <div
                className={
                  'col-md-9 font-tarsus align-self-center text-justify'
                }
                style={{ paddingLeft: '1em', fontSize: '1.1em' }}
              >
                <strong>React Native Intern</strong>
                <br />
                <em>11 December 2017 - 22 January 2018</em> <br />
                <em>Dipper Technologies</em> <br />
                <hr />
                I interned as a React Native developer in the organisation. I
                worked on building cross platform applications using React
                Native. Since the technology was new to me, it provided a great
                working and learning experience. I worked in a team, and was
                consistently guided by my supervisor to overcome my
                shortcomings. We had two tasks at hand:
                <ul>
                  <li>
                    {' '}
                    Shift one of the existing apps from Ionic Framework to React
                    Native
                  </li>
                  <li>
                    {' '}
                    Create a new EPOD (Electronic Proof of Delivery) application
                  </li>
                </ul>
                <hr style={{ borderWidth: '3px' }} />
                <strong>Software Developer Intern</strong>
                <br />
                <em>14 June 2017 - 10 July 2017</em> <br />
                <em>NBCC (India) Ltd</em> <br />
                <hr />
                I interned as a Software developer in the organisation. I worked
                on building a desktop application for the organisation for the
                purpose of canteen management. I planned and developed the
                complete application on my own with some feedback from my
                colleagues and help from my seniors. I developed the application
                using JavaFx. The main idea was to:
                <ul>
                  <li> Reduce labour load and paper wastage</li>
                  <li> Efficient and easy to use interface</li>
                </ul>
              </div>
            </div>
            <hr style={{ borderWidth: '3px' }} />
            <div className={'row'}>
              <button
                type={'button'}
                className={'btn about-me font-tarsus'}
                style={{ backgroundColor: '#E83556', opacity: '1' }}
                disabled={'disabled'}
              >
                <h5>
                  Educational <br /> Info
                </h5>
              </button>
              <div
                className={
                  'col-md-9 font-tarsus align-self-center text-justify'
                }
                style={{ paddingLeft: '1em', fontSize: '1.1em' }}
              >
                <strong>SRM Institute of Science and Technology</strong>
                <br />
                <em>2015 - 2019 (Anticipated)</em> <br />
                <em>B. Tech </em> <br />
                <em>Computer Science and Engineering</em> <br />
                <hr />
                In these three years of college, I have learnt a lot and have
                worked on various projects. I have worked on Software
                Development, Mobile Application Development, Web Development,
                Cloud Technology and Blockchain Technology. I have participated
                in several events. I received the first position in Spell Bee
                Competition which was held in Innovate 2K15. My CGPA is 8.43
                (till 5<sup>th</sup> semester)
              </div>
            </div>
          </div>
          <div className={'col-md-3 col-sm-12 col-xs-12 side-info'}>
            <div className={'row'}>
              <div className={'col-md-12 col-sm-6 col-xs-6 icons'}>
                <div className={'text-center'} style={{ fontSize: '4em' }}>
                  <FaExclamationCircle />
                </div>
                <div className={'font-tarsus'}>
                  <h4 className={'text-center'}>Skills</h4>
                  <hr />
                  <ul>
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
                <div className={'text-center'} style={{ fontSize: '4em' }}>
                  <IoAndroidGlobe />
                </div>
                <div className={'font-tarsus'}>
                  <h4 className={'text-center'}>Languages</h4>
                  <hr />
                  <ul>
                    <li> C/C++</li>
                    <li> Java</li>
                    <li> Python</li>
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
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
            <div className={'col-md-6 text-left'}>
                <h4
                    onClick={()=>this.handleContentChange(0)}
                    className={'navigation-link'}
                >
                    <strong style={{ fontSize: '1.2em' }}>←</strong> Home
                </h4>
            </div>
            <div className={'col-md-6 text-right'}>
                <h4
                    onClick={()=>this.handleContentChange(2)}
                    className={'navigation-link'}
                >
                    Projects <strong style={{ fontSize: '1.2em' }}>→</strong>
                </h4>
            </div>
        </div>
      </div>
    );
  }
}
