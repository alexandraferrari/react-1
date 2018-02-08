import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "ale", age: 25},
      {id: '2', name: "ale2", age: 25},
      {id: '3', name: "ale3", age: 25}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const personsAux = this.state.persons.slice(); //slice faz uma copia do array para personsAux
    const personsAux = [...this.state.persons]; //comando faz o mesmo que linha acima
                    
    personsAux.splice(personIndex, 1);
    this.setState({persons: personsAux});
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
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
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
