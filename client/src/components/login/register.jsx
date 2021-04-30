import React, { useState } from "react";
import loginImg from "../../fitnesslogo.svg";
import Axios from 'axios';
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernamereg: '',
      passwordreg: '',
      emailreg : ''
    };
  }

  render() {
    // const [usernameReg, setUsernameReg] = useState('');
    // const [passwordReg, setPasswordReg] = useState('');
    // const [emailReg, setEmailReg] = useState('');
    const doregister = () => {
      Axios.post('http://localhost:3001/users',{
        username : this.state.usernamereg,
        password : this.state.passwordreg,
        email : this.state.emailreg
      }).then((response)=>{
        console.log(response);
      });
    };
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e)=>{
                this.setState({ usernamereg: e.target.value });
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={(e)=>{
                //setEmailReg(e.target.value);
                this.setState({ emailreg: e.target.value });
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={(e)=>{
                //setPasswordReg(e.target.value);
                this.setState({ passwordreg: e.target.value });
              }}/>
            </div>
            
          </div>
        </div>
        <div className="footer">
          <button onClick={doregister} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
