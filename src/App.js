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
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Alexandra" , age: 25},
        {name: event.target.value, age: 23}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name}
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <button
        style={styleButton}
        onClick = {this.togglePersonsHandler}>Switch valor</button> 
        {persons}
      </div>
    );

    //a linha abaixo faz o mesmo que o codigo Javascript acima, que é compilado para o codigo abaixo
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'ale\'s teste'));
  }
}

export default App;
