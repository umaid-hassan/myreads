import React, {
  Component
} from "react";
import PropTypes from 'prop-types';
import * as BooksAPI from "../../BooksAPI";
import {
  Link
} from "react-router-dom";
import Shelf from "../Shelf";

class BookSearch extends Component {

  state = {
    bookResults: []
  };

  search = (event) => {
    BooksAPI.search(event.target.value)
      .then(results => {
        if (!results || results.error) {
          this.setState({
            bookResults: []
          });
          return;
        }
        this.setState({
          bookResults: results
        });
      })
  };

  render() {

      const {
        books,
        moveBook
      } = this.props;
  return ( 
    <div className = "search-books" >
    <div className = "search-books-bar" >
    <Link to = "/" >
    <button className = "close-search" > Close </button> 
    </Link> 
    <div className = "search-books-input-wrapper" >
    <input type = "text"
    placeholder = "Search by title or author"
    onChange = {
      event => this.search(event)
    }
    /> 
    </div> 
    </div> 
    <div className = "search-books-results" >
    
    <ol className = "books-grid" > </ol> {
      this.state.bookResults.length > 0 && ( <
        Shelf books = {
          this.state.bookResults
        }
        currentBooks = {
          books
        }
        shelfName = "Search Results"
        moveBook = {
          moveBook
        }
        />
      )
    } 
    </div> 
    </div>
  );
  }
  }

BookSearch.propType = {
  moveBook: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired
}

export default BookSearch;
