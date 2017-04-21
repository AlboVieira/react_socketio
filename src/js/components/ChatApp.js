import React from "react";

import UsersList from "./UsersList";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

const socket = io.connect('http://localhost:3000');

export default
class ChatApp extends React.Component{
    constructor(){
        super();
        this.state = {users:{},messages:[]};
        socket.emit('init');
        socket.on('load', this.componentDidMount.bind(this));
        socket.on('send:message', this.messageReceived);
        /*socket.on('user:join', this._userJoined);
        socket.on('user:left', this._userLeft);
        socket.on('change:name', this._userChangedName);*/
    }

    componentDidMount(data) {
        if(data){
            this.setState({
                users: data.users,
                currentUser: data.currentUser
            });
        }
    }

    send(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
    }

    messageReceived(message) {
        this.state.messages.push(message);
    }

    render(){

        if(!Array.isArray(this.state.users)){
            return null;
        }
        return (
            <div>
                <h1>Chat React</h1>
                <UsersList users={this.state.users} />
                <MessageList messages={this.state.messages} />
                <MessageForm
                    onMessageSubmit={this.send.bind(this)}
                    userId={this.state.currentUser.id}
                    userName={this.state.currentUser.name}
                />
            </div>
        );

    }
}