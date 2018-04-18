import React, { Component } from 'react';
import './Footer.css';
import Icon from 'react-icons-kit';
import { phone,mail4,plus } from 'react-icons-kit/icomoon';

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

export class Footer extends Component {
    render() {
        return (
            <div>
                <div style={phantomStyle}/>
            <div className="Footer">
                <div className={"row"} style={{paddingLeft:'20%',paddingRight:'20%'}}>
                    <div className={"col-md-4"}>
                        <div className={"row section"}>
                            <div className={"col-md-2 col-sm-2 heading"}>
                                <div className={"icons"} >
                                    <Icon icon={phone} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-10 col-sm-10 content"}>
                                <strong>Call<br/>
                                    +91-9971110289</strong>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"row section"}>
                            <div className={"col-md-2 col-sm-2 heading"}>
                                <div className={"icons"}>
                                    <Icon icon={mail4} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-10 col-sm-10 content"} >
                                <strong>Contact<br/>
                                    <a href={"mailto:akshay.avinash@gmail.com"} style={{color:'white'}}>akshay.avinash@gmail.com</a></strong>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"row section"}>
                            <div className={"col-md-2 col-sm-2 heading"}>
                                <div className={"icons"}>
                                    <Icon icon={plus} size={'1.2em'}/>
                                </div>
                            </div>
                            <div className={"col-md-10 col-sm-10 content"}>
                                <strong>Follow Me:<br/>
                                    <div className={"row"}>
                                        <a href="https://facebook.com/akshay11298" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official"></i></a>
                                        <a href="https://github.com/akshay11298" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"></i> </a>
                                        <a href="https://www.linkedin.com/in/akshay-avinash-a4a941141/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                                    </div>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
