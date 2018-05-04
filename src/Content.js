import React,{Component} from 'react';
import './Content.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem} from 'reactstrap';
import {Home} from "./Menu/Home/Home";
import {Projects} from "./Menu/Projects/Projects";
import {Resume} from "./Menu/Resume/Resume";
import {Contact} from "./Menu/Contact";

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            content:0,
            menuItems:['Home','Resume','Projects','Contact Me'],
            isOpen:false
        }
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    };

    getComponent=(index)=>{
        this.setState({
            content:index,
            isOpen:false
        });
        console.log(this.state.content);
    };

    contentChange=(index)=>{
      this.setState({
          content:index
      })
    };

    render(){
        return(
            <div>
            <header>
                <h1 className="font-tarsus" style={{fontSize:'4em'}}>Akshay Avinash</h1>
                <div className="row" id={"head"}>
                    <div className={"col-md-5 col-sm-10  col-xs-10"}>
                    <h2 className="font-tarsus" style={{fontSize:'1.7em',paddingTop:'3%'}}>Computer Science Engineer</h2>
                    </div>
                <Navbar className={"col-md-7 col-sm-2  col-xs-2"} expand={"md"} light>
                    <NavbarToggler className={"float-right"} onClick={()=>this.toggle()}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={"ml-auto text-left"} navbar>
                            {this.state.menuItems.map((value,index)=>{
                                if(index===this.state.content){
                                    return( <NavItem className='nav-link font-tarsus active-link' key={index} style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(index)}>{value}</NavItem>);
                                }
                               return( <NavItem className='nav-link font-tarsus' key={index} style={{fontSize:'1.5em'}} onClick={()=>this.getComponent(index)}>{value}</NavItem>);
                            })}
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </header>
                {this.state.content===0 &&
                <Home current={this.state.content} onContentChange={this.contentChange} />
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