import React, { Component } from 'react'
import './App.css'
import Person from './Persons/Person/Person'
import styled from 'styled-components'
import Persons from './Persons/Persons'
import Cockpit from './Cockpit/Cockpit'
import classes from './App.css'
import { render } from '@testing-library/react'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      persons: [
        { id: 'noob', name: 'Thomas', age: '12' },
        { id: 'pro', name: 'IMPOSTOR', age: '12' }
      ],
      showPersons: false,
      otherState: 'some other value'
    }
  }
  
  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  switchNameHandler = newName => {
    console.log('Was clicked!')
    this.setstate({
      persons: [
        { name: 'RoosiaBool (Helo124)', age: '12' },
        { name: newName, age: '12' }
      ],
      otherState: this.state.otherState
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = this.state.persons[personIndex]
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }
  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = this.state.persons[personIndex]
    person.age = event.target.value
    const persons = [...this.state.persons]
    // persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  style = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid blue',
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lime',
      color: 'black'
    }
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = personIndex => {
    // const persons = personsState.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
  }

  // style.backgroundColor = "red"
  // style[':hover'] = {
  //   backgroundColor: 'lightred',
  //   color: 'black'
  // }

  // let btnClass = ''

  newPerson = () => {
    const newPersons = [
      ...this.state.persons,
      { id: Math.random(), name: '', age: '' }
    ]
    this.setState({
      persons: newPersons
    })
  }

  deletePerson = () => {
    let persons = this.state.persons
    persons.pop()
    this.setState({
      persons: persons
    })
  }
  render () {
    console.log('[App.js] render')
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          changed2={this.ageChangedHandler}
        />
      )
    }
    return (
      <div className='App'>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}
export default App