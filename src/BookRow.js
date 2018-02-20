import React, {Component} from 'react'

class BookRow extends Component{


    render(){

        return(
            <li>
                {this.props.title}
               

            </li>
        )
    }
}
export default BookRow