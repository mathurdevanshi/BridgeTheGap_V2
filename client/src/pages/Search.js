import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    results: [],
    title: "",
    toResults: false,
  };

  onChange(event) {
    console.log(event.target.value);

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  searchBooks = (event) => {
    event.preventDefault();

    API.getNewBooks()
    .then((res) => {
      console.log(res);
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
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.onChange.bind(this)} name="title" placeholder="Search (required)" />
              <FormBtn onClick={this.searchBooks} >Submit Book</FormBtn>
            </form>
          </Col>
        </Row>

        <Row>
          <Col size="lg-12 md-6 sm-12">
              <Jumbotron>
                <h1>Book Results</h1>
              </Jumbotron>
              {this.state.toResults ? (
                <List>
                  {this.state.results.map(book => (
                    <ListItem key={book.id} >
                      <a href={book.volumeInfo.infoLink}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                      </a>
                        <br/>
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                        <br/>
                      <p>
                        {book.volumeInfo.description}
                      </p>
                      <DeleteBtn onClick={() => {
                        
                        let someBook = {
                          link: book.volumeInfo.infoLink,
                          title: book.volumeInfo.title,
                          author: book.volumeInfo.authors[0],
                          image: book.volumeInfo.imageLinks.thumbnail,
                          synopsis: book.volumeInfo.description
                        }
                        
                        this.insertBook(someBook)
                        }}/>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Books;

// key={book._id} for line 77