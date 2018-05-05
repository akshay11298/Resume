import React, { Component } from "react";
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaPlusSquare,
  FaFacebook,
  FaGithubSquare,
  FaLinkedin
} from "react-icons/lib/fa";

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
        <div style={phantomStyle} />
        <div className="Footer">
          <div
            className={"row"}
            style={{ paddingLeft: "20%", paddingRight: "20%" }}
          >
            <div className={"col-md-4"}>
              <div className={"row section"}>
                <div className={"col-md-2 col-sm-2 col-xs-2 heading"}>
                  <div className={"icons"}>
                    {/*<Icon icon={phone} size={'1.2em'}/>*/}
                    <span style={{ fontSize: "1.75em" }}>
                      <FaPhone />
                    </span>
                  </div>
                </div>
                <div className={"col-md-10 col-sm-10 col-xs-10 content"}>
                  <strong>
                    Call<br />
                    +91-9971110289
                  </strong>
                </div>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className={"row section"}>
                <div className={"col-md-2 col-sm-2 col-xs-2 heading"}>
                  <div className={"icons"}>
                    <span style={{ fontSize: "1.75em" }}>
                      <FaEnvelope />
                    </span>
                  </div>
                </div>
                <div className={"col-md-10 col-sm-10 col-xs-10 content"}>
                  <strong>
                    Contact<br />
                    <a
                      href={"mailto:akshay.avinash@gmail.com"}
                      style={{ color: "white" }}
                    >
                      akshay.avinash@gmail.com
                    </a>
                  </strong>
                </div>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className={"row section"}>
                <div className={"col-md-2 col-sm-2 col-xs-2 heading"}>
                  <div className={"icons"}>
                    <span style={{ fontSize: "1.75em" }}>
                      <FaPlusSquare />
                    </span>
                  </div>
                </div>
                <div className={"col-md-10 col-sm-10 col-xs-10 content"}>
                  <strong>
                    Follow Me:<br />
                    <div className={"row"} style={{fontSize:'1.25em'}}>
                      <a
                        href="https://facebook.com/akshay11298"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaFacebook style={{ color: "white" }} />
                      </a>
                      <a
                        href="https://github.com/akshay11298"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithubSquare
                          style={{
                            color: "white",
                            marginLeft: "5px",
                            marginRight: "5px"
                          }}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/akshay-avinash-a4a941141/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaLinkedin style={{ color: "white" }} />
                      </a>
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
