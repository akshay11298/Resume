import React from 'react';
import { Button, Form, Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      emailValid:true,
      nameValid:true,
    };
  }
  componentDidMount() {
      document.getElementsByTagName("header")[1].scrollIntoView();
  }

  handleInput=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    // this.validate(name+'Valid');
    this.setState({
        [name]:value
    })
  };

  handleContentChange = index => {
      this.props.onContentChange(index);
  };

  validate=(type)=>{
    let valid;
    if(type==='emailValid')
      valid= this.state.email.match(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}))*$/);
    else
      valid= this.state.name.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.'-]+$/u);
    this.setState({[type]:valid})
  };

  render() {
    return (
      <div className={'font-tarsus'}>
        <header>
          <h1>Contact Me</h1>
        </header>
        <hr style={{ borderWidth: '3px' }} />
        <div className={'row'}>
          <div className={'col-md-4 align-self-center text-justify message'}>
            Hi!<br />
            Thank you for dropping by. If I have any skills that you require,
            kindly let me know.
            <br />
          </div>
          <div className={'col-md-6'}>
            <br />
            <h3 className={'text-center'}>Drop a message</h3>
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
                    value={this.state.name}
                    onChange={(e)=>this.handleInput(e)}
                    onBlur={()=>this.validate('nameValid')}
                    invalid={!this.state.nameValid}
                  />
                  {!this.state.nameValid && <FormFeedback>Is that really your name?</FormFeedback>}
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
                    value={this.state.email}
                    onBlur={()=>this.validate('emailValid')}
                    onChange={(e)=>this.handleInput(e)}
                    invalid={!this.state.emailValid}
                  />
                    {!this.state.emailValid && <FormFeedback>{"I don't think I can get back to you with that wrong email"}</FormFeedback>}
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
        <hr style={{ borderWidth: '3px' }} />
        <div className={'text-right'}>
          <h4
              onClick={()=>this.handleContentChange(0)}
              className={'navigation-link'}
          >
              Home <strong style={{ fontSize: '1.2em' }}>→</strong>
          </h4>
        </div>
      </div>
    );
  }
}
