import React from "react";

export default
class UsersList extends React.Component{

    render(){
        return (
            <div>
                <h3> Online Users </h3>
                <ul>
                    {
                        this.props.users.map((user, i) => {
                            return (
                                <li key={i}>
                                    {user.name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}