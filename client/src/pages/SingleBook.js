import React, {Component} from 'react';
import API from '../utils/API';

class SingleBook extends Component{
  state ={bookData:[]}

  componentDidMount(){
    const bookId = this.props.match.params.bookId;
    
    API.getBookById(bookId)
      .then(res => this.setState({bookData:res.data}))
      .catch(err => console.log(err))
  }


  render(){
    return(
      <React.Fragment>
        {Object.keys(this.state.bookData).length ? JSON.stringify(this.state.bookData, null, 2): "No Data Found"}
      </React.Fragment>
    )
  } 
}

export default SingleBook;