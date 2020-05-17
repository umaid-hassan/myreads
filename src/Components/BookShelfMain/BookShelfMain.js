import React from "react";
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import Shelf from "../Shelf";


const BookShelfMain = (props) => {

  const {
    books,
    moveBook
  } = props

  return ( <
    div className = "list-books" >
    
    <div className = "list-books-title" >
    
      <h1 > MyReads </h1>  
    </div>  
    <div className = "list-books-content" >

    
    <div >

    <
    Shelf shelfName = "Currently Reading"
    books = {
      books.currentlyReading
    }
    moveBook = {
      moveBook
    }
    />  <
    Shelf shelfName = "Want to Read"
    books = {
      books.wantToRead
    }
    moveBook = {
      moveBook
    }
    /> <
    Shelf shelfName = "Read"
    books = {
      books.read
    }
    moveBook = {
      moveBook
    }
    />  
    </div> <
    Link to = "/search"
    className = "open-search" >

    <
    div className = "open-search" >

    <
    button > Add a book </button>  
    </div>  
    </Link>  
    </div>  
    </div>
  );
}

BookShelfMain.propType = {
  moveBook: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired
}

export default BookShelfMain;