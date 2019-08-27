import React, { Component } from 'react';

class Resume extends Component {
    render() {

if(this.props.data){
    var skillmessage=this.props.data.skillmessage
    var education=this.props.data.education.map(education=>{
         return <div>
            
            <h3>{education.school}</h3>
            <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
            <p>{education.description}</p>
        </div>
    })
    var work=this.props.data.work.map(work=>{
        return <div>
           <h3>{work.company}</h3>
           <p>{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
           <p>{work.description}</p>
       </div>
   })
   var skills=this.props.data.skills.map(skills=>{
    var className=`bar-expand ${skills.name}`
    return <li key={skills.name}>
<span style={{width:skills.level}}className={className}></span>
<em>{skills.name}</em>

    </li>
    

})


}
        return (
            <section id="resume">
               <div className="">
               <div className=" first"><h2>Education</h2></div>
               {education}
               <hr/>
               </div>
               
               <div className="">
               <div className=" first"><h2>Work</h2></div>
               {work}
               <hr/>
               </div>
                 
               
               
               <div className="">
               <div className=" first"><h2>Skills</h2></div>
               <ul className="bars">
               {skills}
               </ul>
               </div>
               
                             
               
            </section>
        );
    }
}

export default Resume;