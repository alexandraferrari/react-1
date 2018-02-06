import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "ale", age: 25},
      {name: "ale2", age: 25},
      {name: "ale3", age: 25}
    ]
  }

  switchNameHandler = () => {
    //console.log('Button was clicked!');
    this.setState( {
      persons: [
        {name: "Alexandra" , age: 25},
        {name: "Gustavo", age: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ale's testes</h1>
        <button onClick = {this.switchNameHandler}>Switch valor</button>
        <Person> </Person>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}></Person> 
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}></Person>

        <Person name="ale" age="25"> </Person>
        <Person name="ale1" age="25"> usando props.children </Person>
      </div>
    );

    //a linha abaixo faz o mesmo que o codigo Javascript acima, que é compilado para o codigo abaixo
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'ale\'s teste'));
  }
}

export default App;
