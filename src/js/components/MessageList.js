import React from "react";
import Message from "./Message";

export default
class MessageList extends React.Component{

    render() {
        return (
            <div>
                <h2> Conversation: </h2>
                {
                    this.props.messages.map((message) => {
                        return (
                            <Message
                                time={message.time}
                                name={message.userName}
                                text={message.text}
                            />
                        );
                    })
                }
            </div>
        );
    }
}