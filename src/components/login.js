import React , { Component } from "react";
import firebase from './firebase'
import '../App.css';
import './index.css';
class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.handle=this.handle.bind(this)
    this.state={
        view:false,
        errorMessage: '',        
        email : "",
        password : ""
    }
}


handle(){

    if(this.state.view===true) {
        this.setState({
        view:false
    });
}
    else{ this.setState({
        view:true
    });
}
}

login(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    }).catch((err)=>{
        this.setState({errorMessage: err.message});
    })
}
signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    }).catch((err)=>{
        this.setState({errorMessage: err.message});
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value,
    })
}
render()
{
    return(
        <>

        <button className="btn  btn-md bg-success " style={{margin:"0.8rem"}}onClick={this.handle}>{ this.state.view?"X": "Login" }</button> 
        
        {this.state.view &&


        <div className=" card bg-success text-white   col-md-4 login " >
        <div className="card-body">
        <form  id="form">
        <div className="form-group">
        <input type="email" className="form-control" style={{margin:"0.5rem"}}  placeholder="Enter email" name='email'   onChange={this.handleChange}  value={this.state.email} />
        </div>
        <div className="form-group">
        <input type="password" className="form-control"  style={{margin:"0.5rem"}}  onChange={this.handleChange} name='password' value={this.state.password} placeholder="Password"/>
        </div>
        <div >
            <button  type="submit" className="btn btn-primary" style={{margin:"0.5rem"}} onClick={this.login}>Login</button>
        </div>
        </form>
        { this.state.errorMessage &&  <h6 className="error"> { this.state.errorMessage } </h6> }
        </div>
        </div>
        }
        </>
    )
}
}
export default Login;