import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelfMain from "../BookShelfMain";
import BookSearch from "../BookSearch";
import "./App.css";



class BooksApp extends React.Component {

  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then(result => {
        let currentlyReading = result.filter(
          book => book.shelf === "currentlyReading"
        );
        let wantToRead = result.filter(book => book.shelf === "wantToRead");
        let read = result.filter(book => book.shelf === "read");
        this.setState({
          books: {
            currentlyReading,
            wantToRead: wantToRead,
            read: read
          }
        });
      })
  }

  moveBook(shelf, book) {
    BooksAPI.update(book, shelf)
      .then(result => {
        let myBooks = {
          ...this.state.books
        };
        myBooks[shelf] = result;
        this.setState({
          myBooks
        });
        this.getAllBooks();
      })
  }

  render() {
    return ( 
      <Router>
      <
      div className = "app" >
        <
        Route exact path = "/"
        render = {
          () => ( <
            BookShelfMain books = {
              this.state.books
            }
            moveBook = {
              this.moveBook.bind(this)
            }
            />
          )
        }
        /> <
        Route path = "/search"
        render = {
          () => ( <
            BookSearch moveBook = {
              this.moveBook.bind(this)
            }
            books = {
              this.state.books
            }
            />
          )
        }
        /> 
      </div>
      </Router>
    );
  }
}

export default BooksApp;