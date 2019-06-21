import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    results: [],
    title: "",
    noResults: false,
  };

  componentDidMount()  {
      this.getSavedBooks();
  }

  getSavedBooks = () => {
      console.log("on mount is working");
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-6 sm-12">
              <Jumbotron>
                <h1>Books Saved</h1>
              </Jumbotron>
              {this.state.noResults ? (
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

                        let saveBook = {
                          link: book.volumeInfo.infoLink,
                          title: book.volumeInfo.title,
                          authors: book.volumeInfo.authors,
                          image: book.volumeInfo.imageLinks.thumbnail,
                          synopsis: book.volumeInfo.description
                        }
                        
                        this.saveBook(saveBook)
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