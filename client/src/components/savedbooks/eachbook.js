import React from 'react';
import './style.css'

class Eachbook extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="card">
                        <h5 className="card-title">{this.props.title}</h5>
                        <img className="card-img-top" src={this.props.image} alt={this.props.title} />
                        <div className="card-body">
                            <h6 className="card-title">{this.props.authors}</h6>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.url} target='_blank' className="btn btn-primary">Read more</a>
                            <a href='#' mongoID ={this.props.mongoID}  onClick={() => this.props.deleteBook(this.props.mongoID)} className="btn btn-primary">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Eachbook;