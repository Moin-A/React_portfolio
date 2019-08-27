import React, { Component } from 'react';


class heroimage extends Component {
    render() {
        return (
            <div >
                <header className="img">
                <div className="logo-box">
                    <img className='logo' src={'react2.svg.png'} alt="hello"></img>
                </div>
                <div className="text-box">
                <h2 className="heading">
                <span className="heading-main">lets Rock and Roll.</span>
                <span className="heading-sub">a premium site built in React</span>

                </h2>

                </div>
                </header>
                
            </div>
        );
    }
}

export default heroimage;