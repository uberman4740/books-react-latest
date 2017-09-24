import React, { Component } from 'react';

import './App.css';

import BooksTable from "./BooksTable";
import ShowToRead from "./ShowToRead";



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
    showToRead = (BOOKS)=>{
        this.setState((state)=>{
            BOOKS: this.state.BOOKS.filter((b)=>b.bookCategory === "To Read" )
        })
    }

  render() {
    return (
        <div>
            <div>
                {/*<BooksTable*/}
                    {/*books={this.state.BOOKS}*/}

                {/*/>*/}
                <button onClick={()=>this.showToRead(this.state.BOOKS)}>
                    click
                </button>

            </div>


        </div>



    );
  }
}

export default App;
