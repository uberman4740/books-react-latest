import React, { Component } from 'react';

import './App.css';

import BooksTable from "./BooksTable";
import ShowToRead from "./ShowToRead";
import Search from "./Search";



class App extends Component {
    state = {
        BOOKS : [
            {
                bookTitle: 'Harry Potter',
                bookAuthor: 'J.K. Rowling',
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
    //         BOOKS: state.BOOKS.map((book)=>(book.bookCategory === "To Read") )
    //     })
    // }
    // updateQuery = (query)=>{
    //     this.setState( {query: query.trim()} )
    // }

  render() {


    return (
        <div>
            <Search
                books={this.state.BOOKS}
                query={this.state.query}

            />
            <BooksTable books={this.state.BOOKS}/>




        </div>



    );
  }
}

export default App;
