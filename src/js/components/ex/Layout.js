import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";


export default
class Layout extends React.Component{

    constructor(){
        super();
        this.state = {
            title: "State status"
        }
    }

    changeTitle(title){
        this.setState({title});
    }

    render(){
        const title = "Welcome to the chat";

        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}  />
            </div>
        );
    }
}