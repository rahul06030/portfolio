import React, { Component } from 'react'
import Education from './education';
import Skill from './skill';
import Experience from './experience';
import Profile from './profile';
import Project from './project';
import Course from './course';
import Login from './login';
import firebase from './firebase';
export default class Home extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        user : {}

      }

    }
    componentDidMount()
    {
      this.authListener();
    }
   

    authListener(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user)
        {
          this.setState({user})
        }
        else{
          this.setState({user : null})
        }
      })
    }
    logout(){
    firebase.auth().signOut();
  }
       
    render() {
      return (
        <>



        <div>
          {this.state.user ?
         <button  style={{margin:"0.8rem"}} className="btn btn-md bg-warning" onClick={this.logout}>Logout</button> :<Login></Login>
           }        

        </div>
  
          <Profile user={this.state.user} ></Profile>
          <br/>
          <Skill user={this.state.user}></Skill>
          <br/>
          <Project user={this.state.user}></Project>     
          <br/>

          <div  className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-bordered border-4 border-dark table-responsive">
              <thead> 
                <tr> 
                  <th><h1>Education</h1></th>
                  <th><h1>Courses and Certificates</h1></th>
                </tr>
            </thead>
            <tbody className="tbody ">
              <tr>
                  <td><Education user={this.state.user}> </Education></td>
                  <td>  <Course user={this.state.user}></Course></td>
              </tr>
            </tbody>
            </table>
            </div>

          <Experience user={this.state.user}></Experience>  
  
        </>
      );
    }
}
