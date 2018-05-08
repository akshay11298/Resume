import React from 'react';
import { Button, Form, Col, FormGroup, Label, Input } from 'reactstrap';

export class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={'font-tarsus'}>
        <header>
          <h1>Contact Me</h1>
        </header>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-4 align-self-center text-justify'}>
            Hi!<br />
            Thank you for dropping by. If I have any skills that you require,
            kindly let me know.
          </div>
          <div className={'col-md-6'}>
            <h3>Drop a message</h3>
            <br />
            <br />
            <Form
              action={'https://formspree.io/akshay.avinash@gmail.com'}
              method={'POST'}
            >
              <FormGroup row>
                <Label for={'name'} sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    type={'text'}
                    name={'name'}
                    placeholder={'Enter your name'}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for={'email'} sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter your email ID'}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for={'message'} sm={2}>
                  Message
                </Label>
                <Col sm={10}>
                  <Input
                    type={'textarea'}
                    name={'message'}
                    placeholder={'Enter your message'}
                  />
                </Col>
              </FormGroup>
              <input
                type="hidden"
                name="_next"
                value="https://akshay11298.github.io/Resume/"
              />
              <div className={'text-center'}>
                <Button> Submit </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
