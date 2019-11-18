import React from 'react';
import API from '../../utils/API'
import Eachbook from './eachbook'

class Savedbooks extends React.Component {
    state = {};

    componentDidMount = () => {
        this.getAllBooks();
    }

    getAllBooks = () => {
        API.getBooks().then(res => {
            this.setState({ books: res.data });
        });
    };

    deleteBook = (id) => {
        API.deleteBook(id).then(res => {console.log(res)});
        this.getAllBooks();
    };

    render() {
        return (
            <div>
                {this.state.books ? 
                
                this.state.books.map(x => <Eachbook
                authors={x.authors}
                title={x.title}
                url={x.url}
                description={x.description}
                image={x.image}
                mongoID = {x._id}
                deleteBook = {this.deleteBook}
                />)
                : console.log('No books in DB')}
            </div>
        );
    };
};

export default Savedbooks;