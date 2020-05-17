import React from "react";
import PropTypes from 'prop-types';
import BookShelfChanger from "../BookShelfChanger";

const Book = (props) => {

    const {
      backgroundImage,
      moveBook,
      book,
      currentBooks,
      title,
      authors
    } = props;

    return ( 
      <div >
      
       <li >
      
       <div className = "book" >
      
      <div className = "book-top" >
      
      <div className = "book-cover"
      style = {
        {
          width: 128,
          height: 193,
          backgroundImage: `url(${backgroundImage})`
        }
      } >
      </div> <
      BookShelfChanger moveBook = {
        moveBook
      }
      book = {
        book
      }
      currentBooks = {
        currentBooks
      }
      /> 
      </div> <
      div className = "book-title" > {
        title
      } </div> <
      div className = "book-authors" > {
        authors
      } </div> 
      </div> 
      </li> 
      </div>
    );
    }

    Book.propType = {
      moveBook: PropTypes.func.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      authors: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      book: PropTypes.object.isRequired,

    }

    export default Book;