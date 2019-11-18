import React, {Component} from 'react';
import {Card,Content,Heading,Media,Image,Columns} from 'react-bulma-components';
import API from './../utils/API';

class Result extends Component{
  saveBook = (bookPicked) => {
    //const bookPicked = this.state.bookList.find(book => book.bookId === bookId);
    API.saveBook(bookPicked)
      .then(dbBook => console.log('Saved'))
  }

  deleteBook = bookId => {
    API.deleteBook(bookId)
    .then(this.props.getBooks)
    .catch(err => console.log(err))
  }
  
  render(){
    return(
      <React.Fragment>
         <Columns className="is-multiline">
        
        {this.props.bookData.map(book =>{
        
          return (
            
            <Columns.Column key={this.props.from==='API'? book.bookId : book._id} className="column is-one-quarter">
            <Card>
            <Card.Content>
            <Heading size={4}>{book.title}</Heading>  
            <Media>
            <Media.Item renderas="figure" position="left">
              <Image renderas="p" size={64} alt="64x64" src={book.image} />
            </Media.Item>
            <Media.Item>
              <Heading subtitle size={6}>
                <p>Released: {book.date}</p>
                {book.authors ? <p className="card-text">By: {book.authors.join(', ')}</p> : ''}
              </Heading>
            </Media.Item>
            </Media>
            <br/>
            {book.description?               
                 <div>{book.description.length>50?<Content size='small'>{book.description.split(' ').splice(0,50).join(" ")+'...'}</Content>:<Content size='small'>{book.description}</Content>}</div>:<div>No Description Found</div>}
                
              </Card.Content>
              <Card.Footer>
                <Card.Footer.Item>
                  {this.props.from==='API'?
                    <Card.Footer.Item>
                    <a href="#" onClick={()=>this.saveBook(book)}>Save</a> 
                    </Card.Footer.Item>:
                    <a href="#" onClick={()=>this.deleteBook(book._id)}>Delete</a>
                  }
                </Card.Footer.Item>
                <Card.Footer.Item>
                {this.props.from==='API'?
                    <Card.Footer.Item>
                    <a href={book.link} target='new'>See More</a> 
                    </Card.Footer.Item>:
                    <a href={`/saved/${book._id}`}>View</a>
                  }
                </Card.Footer.Item>
              </Card.Footer>
            </Card> 
            </Columns.Column>   
          )
          })
        }
        </Columns>
        </React.Fragment>
      )}
}

export default Result;
