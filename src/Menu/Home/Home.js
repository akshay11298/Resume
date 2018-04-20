import React from 'react';
import img from '../../img/Profile/me.jpg';
import './Home.css';

export class Home extends React.Component{

    handleContentChange=(index)=>{
        this.props.onContentChange(index);
    };
    render(){
        return(
            <div className={'row d-flex flex-solumn'} style={{marginTop:'2em'}}>
                <div className={'col-md-6'}>
                    <img src={img} alt={"Me"} className={'img-fluid rounded-circle'}/>
                </div>
                <div className={'col-md-1'}/>
                <div className={'col-md-5 home-content'}>
                    <div className={'font-tarsus'}>
                        <strong><h1 style={{fontSize:'5em'}}>Hello,</h1></strong>
                    </div>
                    <div className={'font-tarsus'}>
                        <h2 style={{fontSize:'3.5em'}}>a bit about me:</h2>
                    </div>
                    <div className={'row'}>
                        <button type={'button'} className={'btn about-me font-tarsus'} style={{backgroundColor:'#E83556'}} onClick={()=>this.handleContentChange(1)}>
                            <h5>Resume</h5>
                        </button>
                        <button type={'button'} className={'btn about-me font-tarsus'} style={{backgroundColor:'#61d0d4'}} onClick={()=>this.handleContentChange(2)}>
                            <h5>Projects</h5>
                        </button>
                        <button type={'button'} className={'btn about-me font-tarsus'} style={{backgroundColor:'#D1C926'}} onClick={()=>this.handleContentChange(3)}>
                            <h5>Contact Me</h5>
                        </button>
                    </div>
                    <div className={'font-tarsus'} style={{marginTop:'0.75em'}}>
                        I am an easy going and hard working person. I love new challenges and like to explore new tech and expand my domain.<br/>
                        Currently, I'm in third year so I am looking for internsnhips.
                    </div>
                </div>
            </div>
        );
    }
}