import React, { Component } from 'react';





class Header extends Component {
    constructor(props){
    super(props)
    this.state = {}
    this.handleScroll=this.handleScroll.bind(this)
    }
    
    navref=React.createRef()
    handleScroll = () => {
    this.setState({
    scroll: window.scrollY
    })
    } 
    componentDidMount() {
    const nav= document.querySelector('#nav-wrap')
    var about=document.querySelector('#nav-wrap>ul>li:nth-of-type(2)')
    this.setState({
    top: nav.offsetTop,
    height:nav.offsetTop,
    isSwitchonAbout: null,
    isSwitchonResume:null,
    isSwitchoncontact:null,
    })
    }
    componentDidUpdate(){
    this.state.scroll>758&&this.state.scroll<972?this.state.isSwitchonAbout=true:this.state.isSwitchonAbout=false
    this.state.scroll>979&&this.state.scroll<1239?this.state.isSwitchoncontact=true:this.state.isSwitchoncontact=false
    this.state.scroll>1216&&this.state.scroll<2374?this.state.isSwitchonResume=true:this.state.isSwitchonResume=false
    }
    render() {
        if(this.props.data){
            var name = this.props.data.name;
        }
        window.addEventListener('scroll', this.handleScroll);
        
        return (
           
            <header id="home">
                    <nav id="nav-wrap" ref={this.navref} >
                        {/* <a href="#nav-wrap">Show Navigation</a>
                        <a href="#home"> Hide Navigation</a> */}
                       <ul>
                            <li><a a className={`smoothscroll ${this.state.isSwitchonAbout?"letterbold":""}`} href="#home">Home</a></li>
                            <li><a className={`smoothscroll ${this.state.isSwitchonAbout?"letterbold":""}`} href="#about">About</a></li>
                            <li><a className={this.state.isSwitchonResume?"letterbold":""} href="#resume">Resume</a></li>
                            <li><a className={this.state.isSwitchon?"letterbold":""} href="Testimonials">Testimonials</a></li>
                            <li><a className={this.state.isSwitchoncontact?"letterbold":""} href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    
                    
            </header>
           
            
            
        )
    }
}

export default Header;
