import React, {Component} from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      	message: {
          username: '',
          text: ''
        }
    }
    this.handleInputMessage = this.handleInputMessage.bind(this);
  }
  onAddMessage = (event) => {
  	event.preventDefault();
    console.log(this.state);
    this.props.onAddMessage(this.state.message);
  }
  handleInputMessage(event) {
    const thisUser = this.props.user;
    this.setState({
      message: {
  	  username: thisUser,
      text: event.target.value
  	}
    });
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };
  clearForm = () => {
    this.setState({
    	message: ''
    })
  }
  render() {
  	return (
            <form className="input-group">
            	<input type="text" className="form-control" placeholder="Enter your message..." onChange={this.handleInputMessage}/>
            	<div className="input-group-append">
            		<button className="btn submit-button" disabled={this.isDisabled()} onClick={this.onAddMessage}> SEND </button>
      			</div>
      		</form>
    )
  }
}
export default MessageInput;