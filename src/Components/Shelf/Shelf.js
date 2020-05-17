import React from "react";
import PropTypes from 'prop-types';
import Book from "../Book";

class Shelf extends React.Component {

  getBookImage(book) {
    if (book.imageLinks && book.imageLinks.thumbnail) {
      return book.imageLinks.thumbnail;
    } else
      return "";
  }

  render() {
    const {
      shelfName,
      books,
      moveBook,
      currentBooks
    } = this.props
    return ( 
      <div className = "bookshelf" >
      <h2 className = "bookshelf-title" > {
        shelfName
      } </h2> 
      <div className = "bookshelf-books" >
      <ol className = "books-grid" > {
        books.map(book => ( <
          Book key = {
            book.id
          }
          book = {
            book
          }
          title = {
            book.title
          }
          authors = {
            book.authors
          }
          backgroundImage = {
            this.getBookImage(book)
          }
          moveBook = {
            moveBook
          }
          currentBooks = {
            currentBooks
          }
          />
        ))
      } 
        </ol>  
      </div>  
      </div>
    );
  }
}

Book.propType = {
  moveBook: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
  shelfName: PropTypes.string.isRequired
}

export default Shelf;