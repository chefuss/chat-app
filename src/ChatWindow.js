import React, { Component } from 'react';
/*
<form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>

*/
class ChatWindow extends Component {
	render() {
    	return (
              <ul className="message-list">
                {this.props.messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === this.props.user ? 'message sender' : 'message recipient'
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>
        )
    }
}
export default ChatWindow;