import React from "react";
import loginImg from "../../fitnesslogo.svg";
import Axios from 'axios';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernamereg: '',
      passwordreg: ''
    };
  }

  render() {
    const dologin = () => {
      Axios.post('http://localhost:3001/auth/login',{
        username : this.state.usernamereg,
        password : this.state.passwordreg,
      }).then((response)=>{
        console.log(response);
      });
    };
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(e)=>{
                //setPasswordReg(e.target.value);
                this.setState({ passwordreg: e.target.value });
              }}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={dologin} type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
