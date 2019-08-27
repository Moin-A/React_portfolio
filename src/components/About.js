import React, { Component } from 'react';


class About extends Component {
    render() {
       if (this.props.data){
           var image= this.props.data.image
           var bio =this.props.data.bio
           var city = this.props.data.address.city;
           var state = this.props.data.address.state;
           var zip = this.props.data.address.zip;
           var phone= this.props.data.phone;
           var email = this.props.data.email;
           
       }
        return (
           <section id="about">
               <div className="row">
                  <div class="column composition">
                  
                      <img className="composition__photo composition__photo--p1" src={'oskar-yildiz-gy08FXeM2L4-unsplash.jpg'} alt="hello.jpg"></img>
                      <img className="composition__photo composition__photo--p2" src={"joshua-aragon-EaB4Ml7C7fE-unsplash.jpg"} alt="hello.jpg"></img>
                      <img className="composition__photo composition__photo--p3" src={'paul-esch-laurent-oZMUrWFHOB4-unsplash.jpg'} alt="hello.jpg"></img>  

                  </div>
                  <div class="column second">
                      <h2>About</h2>
                      <p>{bio}</p>
                      <div id="contact">
                      <h2>Contact Details</h2>
                      <p className="adress"></p>
                      <span>Moin Ahmed</span>
                      <br/>
                      <span>your sreeet ,<br/>{city}<br/>{state}<br/>{zip}<br/>{email}  </span>
                      </div >
                      <div className="button-box">
                      <a className="button" href="#home">RESUME &rarr;</a>
                      </div>
                  
                      
                  </div>
                  </div>
           </section>
                   
          
        )
    }
}

export default About;