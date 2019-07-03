import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from "react-router-dom";


class Login extends Component {

  state = {
    username: "",
    password: "",
    redirect: false,
  };

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  setRedirect = () => {
    console.log("setting redirect");

    this.setState({
      redirect: true
    });
  }
 
  renderRedirect = () => {
    console.log("checking redirect");

    if (this.state.redirect) {
      console.log("if statement is being reached");
      return <Redirect to="/" />
    }
  }

  loginUser = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    const newUser = {
      username: username.trim(),
      password: password.trim()
    }

    API.loginUser(newUser)
    .then((res) => {

      console.log(res.data.token);
      let token = res.data.token

      localStorage.setItem("jwt", JSON.stringify(token));

      let retrievedToken = localStorage.getItem("jwt");

      if (retrievedToken) {
        this.setRedirect();
      }
      console.log(JSON.parse(retrievedToken));
      

    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-6">
            <Jumbotron>
              <h1>Login page</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.onChange.bind(this)} name="username" placeholder="username (required)" />
              <Input onChange={this.onChange.bind(this)} name="password" placeholder="password" type="password"/>
              <FormBtn onClick={this.loginUser} >Submit Book</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

