import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../Context/FirebaseContext";
import { useState } from "react";
import GoogleIcon from "./GoogleIcon";
import { useEffect } from "react";

function LoginForm() {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    firebase.SignUp(email, password);
  };

  const SignIn = (e) => {
    e.preventDefault();
    firebase.SignIn(emailSignIn, passwordSignIn);
  };

  const SignUpwithGoogle = (e)=>{
    e.preventDefault();
    firebase.SignUpwithGoogle()
  }

  useEffect(()=>{
    console.log(firebase.user);
  },[firebase.user])

  return (
    <div>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={SignUp}>
          Sign Up
        </Button>
      </Form>
      <br />
      <h1>Or Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmailSignIn">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={emailSignIn}
            onChange={(e) => setEmailSignIn(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordSignIn">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordSignIn}
            onChange={(e) => setPasswordSignIn(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={SignIn}>
          Sign In
        </Button>
      </Form>
      <br />
      <h1>Or,</h1>
      <GoogleIcon clickEvent={SignUpwithGoogle} />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default LoginForm;
