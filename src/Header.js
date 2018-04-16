import React,{Component} from 'react';
import './App.css';
import {Home} from "./Menu/Home/Home";
import {Projects} from "./Menu/Projects/Projects";
import {Resume} from "./Menu/Resume/Resume";
import {Contact} from "./Menu/Contact";

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            content:0,
            menuItems:['Home','Resume','Projects','Contact Me']
        }
    }

    getComponent=(index)=>{
        this.setState({
            content:index
        });
        console.log(this.state.content);
    };

    render(){
        return(
            <div>
            <header>
                <h1 className="font-tarsus" style={{fontSize:'4em'}}>Akshay Avinash</h1>
                <nav className="navbar navbar-expand-md">
                    <div>
                        <h2 className="font-tarsus" style={{fontSize:'1.7em'}}>Computer Science Engineer</h2>
                    </div>
                    <div className="collapse navbar-collapse menu">
                        <ul className="navbar-nav mr-auto">
                            {this.state.menuItems.map((value,index)=>{
                                if(index===this.state.content){
                                    return( <li className='nav-link font-tarsus active-link' key={index} style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(index)}>{value}</li>);
                                }
                               return( <li className='nav-link font-tarsus' key={index} style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(index)}>{value}</li>);
                            })}
                            {/*<li className="nav-link font-tarsus" style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(2)}>Resume</li>*/}
                            {/*<li className="nav-link font-tarsus" style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(3)}>Projects</li>*/}
                            {/*<li className="nav-link font-tarsus" style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(4)}>Contact Me</li>*/}
                        </ul>
                    </div>
                </nav>
            </header>
                {this.state.content===0 &&
                <Home current={this.state.content}/>
                }
                {this.state.content===1 &&
                <Resume current={this.state.content}/>
                }
                {this.state.content===2 &&
                <Projects current={this.state.content}/>
                }
                {this.state.content===3 &&
                <Contact current={this.state.content}/>
                }
            </div>
        );
    }
}