import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
//import Radium from 'radium';
import Person from '../components/Persons/Person/Person';
import PersonS from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);
    console.log ('App.js constructor');
  }
  state = {
    Persons: [
      { id: 1, name:'ovais', age:'30'},
      { id: 2, name:'Danish', age:'35'}
    ],
    showPersons : false,
    showCockpit : true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps',props);
    return state;

  }

  componentWillMount(){
    console.log('App.js componentWillMount');
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }
  swithNameHandler = () => {
    this.setState(
      {
        Persons: [
          {name:'Ovaiss', age:'31'},
          {name:'Danish', age:'35'}
        ]
      }
    );
  }
  swithNameHandler2 = (newName) => {
    this.setState(
      {
        Persons: [
          {name:newName, age:'31'},
          {name:'Danish', age:'35'}
        ]
      }
    );
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;    
    this.setState({showPersons : !show});
  }
  
  nameChangeHandler = (event) => {
    this.setState(
      {
        Persons: [
          {name:event.target.value, age:'31'},
          {name:'Danish', age:'35'}
        ]
      }
    );
  }

  deletePersonHandler = (personIndex) =>
  {
    // const persons = this.state.Persons; // refrence the state
    // const persons = this.state.Persons.slice(); // copy the object, not reference
    const persons = [...this.state.Persons]; // create new array and merge state with that
    persons.splice(personIndex,1);
    this.setState({Persons: persons});
  }
  render() {
    console.log('App.js render');
  //   const buttonStyle = {
  //     backgroundColor : 'green',
  //     color : 'white',
  //     font : 'inherit',
  //     border : '1px solid blue',
  //     padding : '8px',
  //     ':hover': {
  //       backgroundColor : 'lightgreen',
  //       color : 'black'
  //     },
  // };

  let persons = null;
  if(this.state.showPersons)
  {
    persons = (
      <div>
        {
          <PersonS
          persons = {this.state.Persons}
          clicked = {this.deletePersonHandler}
           />
            //  this.state.Persons.map((person, index) => {
            //    return <Person
            //    click={() => this.deletePersonHandler(index)}
            //    name={person.name} 
            //    age={person.age}
            //    key = {person.id}         
            //     />
            //  })
           }     
    </div>
    );
    // buttonStyle.backgroundColor = 'red';
    // buttonStyle[':hover'] = {
    //   backgroundColor : 'salmond',
    //   color : 'black'
    // };
  }

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={classes.join(' ')}>
          stying testing
        </p> */}
         { this.state.showCockpit ?
        <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.Persons}
        clicked = {this.togglePersonsHandler} /> : null
      } 
      <button 
          onClick = {() => {
            this.setState({showCockpit : false});
            }}
            >
              Hide cockpit
              </button>
        <button onClick ={this.swithNameHandler}>Swith Name</button>       
        <button onClick ={this.swithNameHandler}>Swith Name</button>
        <button onClick ={this.swithNameHandler2.bind(this,'asd')}>Swith Name2</button>
        {/* <button className="bold" onClick ={this.togglePersonsHandler}>Hide Persons</button> */}
        { this.state.showPersons ?
         <div>
           <ErrorBoundary>           
          <Person 
          name="ovais" 
          age="28">Hobbies are 1</Person>
          <Person name="Danish" age="35">Hobbies are 1</Person>          
            <Person 
          name={this.state.Persons[0].name} 
          age={this.state.Persons[0].age}
          click={this.swithNameHandler}
          change={this.nameChangeHandler}>Hobbies are 1</Person>
          </ErrorBoundary>
        </div> : null
        }
        {persons}
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hello'));
  }
}

export default App;
// export default Radium(App);
