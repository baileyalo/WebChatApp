import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';


export default function Login() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();
    let hardcodedCred = {
        username: 'admin',
        password: 'admin123'
    }

  
  if ((username === hardcodedCred.username) && (password=== hardcodedCred.password)) {
      
    const token = '123456abcdef';
    sessionStorage.setItem('auth-token', token);
   
    history('/dashboard');
   
    } else {
    //bad combination
    alert('wrong username or password combination');
    }  
}

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="username">

          <Form.Label>Username</Form.Label>

          <Form.Control autoFocus type="username"value={username}

            onChange={(e) => setUsername(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control type="password" value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}