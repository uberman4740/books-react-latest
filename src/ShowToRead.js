import React, { Component } from 'react';

import BookRow from "./BookRow";

class ShowToRead extends Component{
    state = {
        BOOKSa : [
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





    render(){
        let showToRead






        return(
            <div>
                {showToRead}

            </div>





        )
    }

}
export default ShowToRead