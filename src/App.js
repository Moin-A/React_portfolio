import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About';
import Resume from './components/Resume';
import Heroimage from './components/heroimage'



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            foo: "Bar",
            resumeData: {},
        }
    }
getResumeData(){
const fetchresponse=fetch('/resumeData.json')
fetchresponse.then(data=>{return data.json()})
.then(data2=>{
    this.setState({
        resumeData:data2
    })
})


}

componentDidMount(){
    this.getResumeData()
}    
    render() {
        return (
            <div>
               <Header data={this.state.resumeData.main}/>
               <Heroimage/>
               <About data={this.state.resumeData.main}/>
               <Resume data={this.state.resumeData.resume}/>
            </div>
        );
    }
}

export default App;



