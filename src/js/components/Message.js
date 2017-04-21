import React from "react";

export default
class Message extends React.Component{

    render(){
        return (
            <div>
                <strong>{this.props.name}</strong>:<span>{this.props.text}</span><br/>
                <small>{this.props.time}</small>
            </div>
        );
    }
}