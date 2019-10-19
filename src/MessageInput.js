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
    this.props.onAddMessage(this.state.message);
    this.clearForm();
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
    if (this.state.message.text !== '') {
      return false;
    }
    return true;
  };
  clearForm = () => {
    this.setState({
    	message: {
        	username: '',
          	text: ''
        }
    })
  }
  render() {
    const { message } = this.state;
  	return (
            <form className="input-group">
            	<input type="text" className="form-control" value= {message.text} placeholder="Enter your message..." onChange={this.handleInputMessage}/>
            	<div className="input-group-append">
            		<button className="btn submit-button" disabled={this.isDisabled()} onClick={this.onAddMessage}> SEND </button>
      			</div>
      		</form>
    )
  }
}
export default MessageInput;