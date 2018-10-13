import React from 'react';
import SlideShow from './SlideShow';
import Nora from '../../img/Nora/index.jpeg';
import NBCC1 from '../../img/nbcc/employee.gif';
import NBCC2 from '../../img/nbcc/caterer.gif';
import NBCC3 from '../../img/nbcc/notification.gif';
import home from '../../img/Hostel management/home.jpg';
import search from '../../img/Hostel management/search.jpg';
import Advance from '../../img/MUA/Advanced settings.gif';
import SignIn from '../../img/MUA/Sign In animation.gif';
import send from '../../img/MUA/send.jpg';
import Receive from '../../img/MUA/Receive mails.jpg';
import MusicX from '../../img/MusicX/musicx.png';
import DidYouMean from '../../img/MusicX/musicx1.png';
import MusicXDesktop from '../../img/MusicX/musicx2.png';

export class Projects extends React.Component {
  componentDidMount() {
    document.getElementsByTagName("header")[1].scrollIntoView();
  }

  handleContentChange = index => {
      this.props.onContentChange(index);
  };

  render() {
    return (
      <div className={'font-tarsus'}>
        <header>
          <h1>Projects</h1>
        </header>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 col-sm-12 col-xs-12'}>
            <SlideShow items={[Nora]} />
          </div>
          <div className={'col-md-6 col-sm-12 col-xs-12 text-justify'}>
              <button
                  type={'button'}
                  className={'btn about-me font-tarsus'}
                  style={{ opacity: '1', backgroundColor:'#61d0d4' }}
                  disabled={'disabled'}
              >
                  <h5>
                      Project | 1
                  </h5>
              </button>
            <hr />
            <h3>Nora</h3>
            <br />
            Nora is a personal assistant. The application is built using React
            Native and so can work on both iOS and Android. The backend is built
            using Python and is hosted on Heroku where the knowledge of Nora is
            stored. I have built an API to access that knowledge. The
            application hits the API with the message and then the message is
            processed on the server and the response is given back to the user
            in text as well as speech format. In the later stage of this
            project, with a help from a classmate I integrated the application
            with IoT and was able to control one home device with the help of
            Nora.
          </div>
        </div>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 col-sm-12 col-xs-12'}>
            <SlideShow items={[MusicX, DidYouMean, MusicXDesktop]} />
          </div>
          <div className={'col-md-6 col-sm-12 col-xs-12 text-justify'}>
              <button
                  type={'button'}
                  className={'btn about-me font-tarsus'}
                  style={{ opacity: '1' , backgroundColor:'#61d0d4'}}
                  disabled={'disabled'}
              >
                  <h5>
                      Project | 2
                  </h5>
              </button>
            <hr />
            <h3>MusicX</h3>
            <br />
            This project is a music search engine. It requires the user to login through Facebook for age validation 
            and to censor content. This app searches through the iTunes library and displays the result. The user can play
            and download the content. As it is just a project and the songs are not licenced, only samples of the songs are available
            and not the complete song itself. <br></br>
            <a href="https://musicx.azurewebsites.net" target="_blank" rel="noopener noreferrer"> MusicX- Website Link</a>
          </div>
        </div>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 col-sm-12 col-xs-12'}>
            <SlideShow items={[NBCC1, NBCC2, NBCC3]} />
          </div>
          <div className={'col-md-6 col-sm-12 col-xs-12 text-justify'}>
              <button
                  type={'button'}
                  className={'btn about-me font-tarsus'}
                  style={{ opacity: '1' , backgroundColor:'#61d0d4'}}
                  disabled={'disabled'}
              >
                  <h5>
                      Project | 3
                  </h5>
              </button>
            <hr />
            <h3>Canteen Management System</h3>
            <br />
            This project is a canteen management system which I developed
            completely on my own when I was interning at NBCC (India) Ltd. This
            application is built using JavaFx and so can run on any platform.
            This project focuses on making the process of ordering food easier
            and more transparent.
          </div>
        </div>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 col-sm-12 col-xs-12'}>
            <SlideShow items={[SignIn, Advance, send, Receive]} />
          </div>
          <div className={'col-md-6 col-sm-12 col-xs-12 text-justify'}>
              <button
                  type={'button'}
                  className={'btn about-me font-tarsus'}
                  style={{ opacity: '1' , backgroundColor:'#61d0d4' }}
                  disabled={'disabled'}
              >
                  <h5>
                      Project | 4
                  </h5>
              </button>
            <hr />
            <h3>Mail User Agent</h3>
            <br />icons
            This is another application I built using JavaFx. Its a mailing
            agent software, which allows a user to send and receive mails. This
            application is not mail server dependent. It works for all available
            mail servers like, gmail, yahoo etc.
          </div>
        </div>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 col-sm-12 col-xs-12'}>
            <SlideShow items={[home, search]} />
          </div>
          <div className={'col-md-6 col-sm-12 col-xs-12 text-justify'}>
              <button
                  type={'button'}
                  className={'btn about-me font-tarsus'}
                  style={{ opacity: '1' , backgroundColor:'#61d0d4' }}
                  disabled={'disabled'}
              >
                  <h5>
                      Project | 5
                  </h5>
              </button>
            <hr />
            <h3>Hostel Management System</h3>
            <br />
            This application was also built using JavaFx. It is a common hostel
            managemnt system which allows the warden to enroll a student, modify
            its details and remove a student's entry.
          </div>
        </div>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-6 text-left'}>
            <h5>If you'd like to know more, feel free to contact me</h5>
          </div>
          <div className={'col-md-6 text-right'}>
            <h4
              onClick={()=>this.handleContentChange(3)}
              className={'navigation-link'}
            >
              Contact me <strong style={{ fontSize: '1.2em' }}>→</strong>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
