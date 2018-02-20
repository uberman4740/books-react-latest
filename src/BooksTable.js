import React, { Component } from 'react';
import BookCategoryRow from "./BookCategoryRow";
import BookRow from "./BookRow";


class BooksTable extends Component{




    render(){
        var rows =[]
        var lastBookCategory = null
        this.props.books.map((book)=> {

            if (lastBookCategory !== book.bookCategory) {

                rows.push(<BookCategoryRow category={book.bookCategory}/>);
            }
            rows.push(<BookRow onMoving={this.moveToReading}
                               title={book.bookTitle}
                               key={book.bookTitle}/>


            )
            lastBookCategory = book.bookCategory



        });

        return(
            <div>
                {rows}


            </div>


        )
    }
}
export default BooksTable



