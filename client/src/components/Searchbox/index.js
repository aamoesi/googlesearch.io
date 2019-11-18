import React from 'react';
import ResultCard from '../googleBookResult';
const axios = require('axios');

class Searchbox extends React.Component {
    state = {
        searchField: null,
        searchResult: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({ searchResult: [] });

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField).then((response) => {
            for (var i = 0; i < response.data.items.length; i++) {
                this.setState({ searchResult: [...this.state.searchResult, response.data.items[i].volumeInfo] });
            };
        });
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <form>
                        <div className="form-group">
                            <label for="booksearchbox">Search for a book</label>
                            <input type="text" className="form-control" name="searchField" id="booksearchbox" placeholder="Book Title" onChange={this.handleInputChange} />
                        </div>
                        <button id='booksearchsubmit' type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                {this.state.searchResult.map(x => <ResultCard
                    authors={x.authors}
                    title={x.title}
                    url={x.previewLink}
                    description={x.description}
                    image={x.imageLinks.thumbnail}
                />)}
            </div>
        );
    };
};

export default Searchbox;