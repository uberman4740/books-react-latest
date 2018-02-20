import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookRow from "./BookRow";
import BooksTable from "./BooksTable";

class Search extends Component{
    state= {
        query: ''
    }
    updateQuery = (query)=>{
        this.setState( {query: query.trim()} )
    }

    render(){
        let showingBooks
        if (this.state.query){
            const match = new RegExp(escapeRegExp((this.state.query), 'i'))
            showingBooks = this.props.books.filter((book)=> match.test(book.bookTitle))

        }
        else{
            showingBooks = this.props.books
        }


        return(
            <div>
                <input
                    type="text"
                    placeholder="Search for books"
                    value ={this.props.query}
                    onChange={ (event)=>this.updateQuery(event.target.value) }
                />
                <div>
                    <BooksTable books={showingBooks}/>
                </div>
                {/*<button onClick={()=>this.props.onShowing()}>*/}
                    {/*Show read books!*/}
                {/*</button>*/}
            </div>

        )
    }
}
export default Search