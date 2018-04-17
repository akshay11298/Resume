import React, { Component } from 'react';
import './Footer.css';
import Icon from 'react-icons-kit';
import { phone,mail4,plus,facebook,linkedin2 } from 'react-icons-kit/icomoon';

export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className={"row"} style={{marginLeft:'5%',marginRight:'5%'}}>
                    <div className={"col-md-4"}>
                        <div className={"row"}>
                            <div className={"col-md-6 heading"}>
                                <div className={"img-circle"} >
                                    <Icon icon={phone} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-6 content"}>
                                <strong>Call<br/>
                                    +91-9971110289</strong>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"row"}>
                            <div className={"col-md-6 heading"}>
                                <div className={"img-circle"}>
                                    <Icon icon={mail4} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-6 content"} >
                                <strong>Contact<br/>
                                    <a href={"mailto:akshay.avinash@gmail.com"} style={{color:'white'}}>akshay.avinash@gmail.com</a></strong>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"row"}>
                            <div className={"col-md-6 heading"}>
                                <div className={"img-circle"}>
                                    <Icon icon={plus} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-6 content"}>
                                <strong>Follow Me:<br/>
                                    <div className={"row"} style={{paddingLeft:'10%'}}>
                                        <div style={{color:'#3b5998',paddingRight:'10%'}}>
                                            <a href={"https://www.facebook.com/akshay11298"}><Icon icon={facebook}/></a>
                                        </div>
                                        <div style={{color:'#4875b4'}}>
                                            <a href={"https://www.linkedin.com/in/akshay-avinash-a4a941141/"}>
                                            <Icon icon={linkedin2}/>
                                            </a>
                                        </div>
                                    </div>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
