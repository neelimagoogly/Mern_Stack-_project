import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const axios = require('axios');
const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {

    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('http://localhost:2000/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      this.props.history.push('/dashboard');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "success",
          type: "success"
        });
      }
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
          <h2>Login</h2>
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
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/register">
            Register
          </Link>
        </div>
      </div>
    );
  }
}
