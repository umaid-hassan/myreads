import React from "react";
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {


    getShelfName(book) {
      if (book && book.shelf) {
        return book.shelf;
      } else if (this.props.currentBooks) {
        let currentBooks = this.props.currentBooks;
        let books = currentBooks.wantToRead
          .concat(currentBooks.currentlyReading)
          .concat(currentBooks.read);

        let bookMatches = books.filter(b => b.id === book.id);
        if (bookMatches && bookMatches[0]) {
          return bookMatches[0].shelf;
        }
      }
      return "none";

    }

  render() {

      const {
        book,
        moveBook
      } = this.props

      return (
      < div className = "book-shelf-changer" >
        <
        select
      defaultValue = {
        this.getShelfName(book)
      }
      onChange = {
          event =>
          moveBook(event.target.value, book)
        } >
          < option value = "move"
          disabled >
            Move to...
            
            </option> 
            <option value = "currentlyReading" > Currently Reading </option> 
            <option value = "wantToRead" > Want to Read </option> 
            <option value = "read" > Read </option> 
            <option value = "none" > None </option> 
            </select> 
            </div>
          );
          }
          }

BookShelfChanger.propType = {
  moveBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default BookShelfChanger;