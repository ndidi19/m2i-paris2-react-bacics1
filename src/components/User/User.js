import React, {Component} from "react";
import classes from "./User.module.css";

class User extends Component {

    render() {
        const myStyle = {backgroundColor:"green", color:"white"};
        myStyle.fontSize = "20px";
        if(!this.props.sexe) {
            myStyle.backgroundColor = "red";
        }
        return (
            <>
                <h1 className={classes.myTitle}>Nom : {this.props.firstname} {this.props.lastname}</h1>
                {this.props.children}
                <div style={myStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
            </>
        )
    }
}

export default User;