import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Home extends Component {

  state = {
    username: "",
    password: "",
  };

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-6">
            <Jumbotron>
              <h1>Home page</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

