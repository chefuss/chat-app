import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

//const users = [{ username: 'Amy' }, { username: 'John' }];

//const messages = [
//  { username: 'Amy', text: 'Hi, Jon!' },
//  { username: 'Amy', text: 'How are you?' },
//  { username: 'John', text: 'Hi, Amy! Good, you?' },
//];

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      users : [
        { username: 'Amy' }, 
        { username: 'John' }
      ],
       messages : [
          { username: 'Amy', text: 'Hi, Jon!' },
          { username: 'Amy', text: 'How are you?' },
          { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    }
  }
  onAddMessage = (message) => {
    console.log(message);
    	this.setState((currentState) => ({
        	messages: [...currentState.messages, message]
        }));
    }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
       		<div className="chat-window">
       		  <h2>Super Awesome Chat</h2>
              <div className="name sender">{this.state.users[0].username}</div>
              <ChatWindow user={this.state.users[0].username} messages={this.state.messages}/>
              <div>
                 <MessageInput user={this.state.users[0].username} onAddMessage={this.onAddMessage}/>
              </div>
            </div>
		  	<div className="chat-window">
			  <h2>Super Awesome Chat</h2>
              <div className="name sender">{this.state.users[1].username}</div>
              <ChatWindow user={this.state.users[1].username} messages={this.state.messages}/>
              <div>
                 <MessageInput user={this.state.users[1].username} onAddMessage={this.onAddMessage}/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
