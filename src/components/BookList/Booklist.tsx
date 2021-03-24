import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import './Booklist.css';



type BookListState = {
    books: any;
}

class BookList extends React.Component <RouteComponentProps, BookListState> {
    constructor(props : RouteComponentProps){
        super(props);
        this.state = {
            books: []
        }
    }

    async componentDidMount(){
        let books = await (await fetch('/api/books')).json();
        this.setState({ books });
    }

    render(){
        return (
            <div>
                <header>Book List</header>
                <ul>
                    { this.state.books.length > 0 && 
                        this.state.books.map((book: any) => (
                            <li key={book.isbn}>
                                <Link to={`/book/${book.isbn}`}>
                                    {book.title}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default BookList;