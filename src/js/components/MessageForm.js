import React from "react";

export default
class MessageForm extends React.Component{

    constructor(){
        super();
        this.state = {text:''};
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = {
            userId : this.props.userId,
            userName : this.props.userName,
            text : this.state.text,
            time : (new Date()).toLocaleString(),
        };
        this.props.onMessageSubmit(message);
        this.setState({ text: '' });
    }

    changeHandler(e) {
        this.setState({ text : e.target.value });
    }

    render() {
        return(
            <div>
                <h3>Write New Message</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        onChange={this.changeHandler.bind(this)}
                        value={this.state.text}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}