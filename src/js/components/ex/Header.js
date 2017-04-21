import React from "react";
import ReactDOM from "react-dom";

export default
class Header extends React.Component{

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){
        //this.props.changeTitle('newTitle');
        return (
            <header>
                <h1>{this.props.title}</h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </header>
        );
    }
}