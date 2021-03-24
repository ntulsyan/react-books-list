import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Book} from '../../models/Book';
import './Book.css';

interface MatchParams {
    bookId: string;
}

class BookItem extends React.Component <RouteComponentProps<MatchParams>, Book>{
    constructor(props: RouteComponentProps<MatchParams>){
        super(props);
        this.state = {
            title: '',
            year: 0,
            description: ''
        }
    }

    async componentDidMount() {
        const { bookId } = this.props.match.params;
        const bookDetails = await (await fetch(`/api/book/${bookId}`)).json();
        this.setState({
            ...bookDetails
        })
    }

   render(){
       return (
           <div className="bookItem">
               <Link to='/'>Back to books list</Link>
               <div className="book-details">
                       <div>
                           <span className="label">Title : </span>
                           <span className="value">{this.state.title}</span>
                       </div>
                       <div>
                           <span className="label">Year :</span>
                           <span className="value">{this.state.year}</span>
                       </div>
                       <div>
                           <span className="label">Description : </span>
                           <span className="value">{this.state.description}</span>
                       </div>
               </div>
            </div>
       )
   }
}

export default BookItem;