import React from 'react';
import img from '../../img/Profile/me.jpg';
import './Home.css';

export class Home extends React.Component {
  handleContentChange = index => {
    this.props.onContentChange(index);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={'row d-flex font-tarsus'} style={{ marginTop: '2em' }}>
        <div className={'col-md-5'}>
          <img src={img} alt={'Me'} className={'img-fluid rounded-circle'} />
        </div>
        <div className={'col-md-2'} />
        <div className={'col-md-5 home-content'}>
          <div>
            <strong>
              <h1 style={{ fontSize: '5em' }}>Hello,</h1>
            </strong>
          </div>
          <div>
            <h2 style={{ fontSize: '3.5em' }}>a bit about me:</h2>
          </div>
          <div className={'row'}>
            <button
              type={'button'}
              className={'btn about-me about-me-animatable'}
              style={{ backgroundColor: '#E83556' }}
              onClick={() => this.handleContentChange(1)}
            >
              <h5>Resume</h5>
            </button>
            <button
              type={'button'}
              className={'btn about-me about-me-animatable'}
              style={{ backgroundColor: '#61d0d4' }}
              onClick={() => this.handleContentChange(2)}
            >
              <h5>Projects</h5>
            </button>
            <button
              type={'button'}
              className={'btn about-me about-me-animatable '}
              style={{ backgroundColor: '#D1C926' }}
              onClick={() => this.handleContentChange(3)}
            >
              <h5>Contact Me</h5>
            </button>
          </div>
          <div style={{ marginTop: '0.75em' }}>
            I am an easy going and hard working person. I love new challenges
            and like to explore new tech and expand my domain.<br />
            Currently in third year looking for internsnhips.
          </div>
        </div>
      </div>
    );
  }
}