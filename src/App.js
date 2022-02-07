import React, {Component} from "react";
import Horloge from './containers/Horloge/Horloge';
import User from "./components/User/User";
import UserAge from "./components/User/UserAge/UserAge";

class App extends Component {

  state = {
    users : [
      {id: 1, firstname: "John", lastname: "Doe", age: 31, sexe: true},
      {id: 2, firstname: "Angela", lastname: "Parker", age: 23, sexe: false},
      {id: 3, firstname: "Linda", lastname: "Smith", age: 35, sexe: false},
      {id: 4, firstname: "Allan", lastname: "Thomson", age: 25, sexe: true},
      {id: 5, firstname: "Paul", lastname: "Thomson", age: 43, sexe: true},
    ]
  }

  render() {
    return (
      <>
        <Horloge />
        {this.state.users.map(user => {
          return (
            <User {...user}>
              <UserAge age={user.age} />
            </User>
          )
        })}
        {/* <User firstname={this.state.users[0].firstname}
          lastname={this.state.users[0].lastname}
          sexe={this.state.users[0].sexe}
        >{this.state.users[0].age}</User>

        <User firstname={this.state.users[1].firstname}
          lastname={this.state.users[1].lastname}
          sexe={this.state.users[1].sexe}
        >{this.state.users[1].age}</User>

        <User {...this.state.users[2]} >{this.state.users[2].age}</User> */}
      </>
    );
  }
  
}

export default App;
