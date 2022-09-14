import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const axios = require('axios');

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      username: '',
      password: '',
      confirm_password: ''
    };
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  

  register = () => {
   

    axios.post('http://localhost:2000/register', {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      
      this.props.history.push('/login');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
      
    });
    
  }

  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <div style={{ marginLeft: '35%', marginTop: '60px', width: '30%' }}>
    <Box color="white" bgcolor="green" p={1}>
      Instructions for Login/Register
      <p>
        <ol>
          <li>If you are new to Agrofam click on Register to create your Account.</li>
          <li>If you have already registered then click on login in.</li>
          <li>After logging into the Dashboard click on the "Fill your Details" Button and then fill the desired form.</li>
          <li>After submitting the form,go back.</li>
          <li>If you are a seller/farmer click on the "Add Commodity" button and add the Commodity you want to sell.</li>
          <li>Or if you are a Buyer the click on the "Order" Button.</li>
          <li>Besides the desired commodity click on "Order Now" button and fill the form to place order.</li>
        </ol>
      </p>
    </Box>
    </div>
        <div>
          <h2>Register</h2>
        </div>

        <div>
       
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
          <br /><br />
          
         
          
          
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == '' && this.state.name == ''}
            onClick={this.register}
          >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}
