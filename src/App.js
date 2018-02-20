import React, { Component } from 'react';

import './App.css';

import BooksTable from "./BooksTable";
import ShowToRead from "./ShowToRead";
import Search from "./Search";
import BookRow from "./BookRow";



class App extends Component {
    state = {
        BOOKS : [
            {
                bookTitle: 'Harry Potter',
                bookAuthor: 'J.K. Rowling',
                bookCategory: 'Read'
            },
            {
                bookTitle: '48 Laws of Power',
                bookAuthor: 'Random Author2',
                bookCategory: 'Read'
            },
            {
                bookTitle: 'The Selfish Gene',
                bookAuthor: 'Richard Dawkins',
                bookCategory: 'Reading'
            },

            {
                bookTitle: 'Random Book',
                bookAuthor: 'Random Author',
                bookCategory: 'To Read'
            },
            {
                bookTitle: 'Random Book2',
                bookAuthor: 'Random Author2',
                bookCategory: 'To Read'
            }
        ]


    }
    // showToRead = (book)=>{
    //     this.setState((state)=>{
    //         BOOKS: state.BOOKS.filter((book)=>(book.bookCategory === "To Read") )
    //     })
    // }
    // showingToRead = ()=>{
    //     this.setState({
    //         BOOKS: this.state.BOOKS.filter((book)=>(book.bookCategory === "Read") )
    //     })
    // }
    // updateQuery = (query)=>{
    //     this.setState( {query: query.trim()} )
    // }
    moveToReading = (book)=>{
        this.setState((state)=>{
                BOOKS: this.state.BOOKS.map((book)=>((book.bookCategory) = "Reading" ))
            }
        )}

  render() {



    return (
        <div>
            <BooksTable
                books={this.state.BOOKS}
            {/*<button onClick={()=> this.props.onMoving}> Move to Reading</button>*/}
                // query={this.state.query}
                // onMovingToReading={this.moveToReading}

            />






        </div>



    );
  }
}

export default App;
