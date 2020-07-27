import React from 'react';



class App extends React.Component {
  constructor(props) {
    super (props);
    //store the list of 10 objects in arrayOfNames
    //store the input from user in state
    this.state = {
      arrayOfNames: [{name: 'Adam', age: 20, country: 'Costa Rica'}, {name: 'Beatriz', age: 22, country: 'Belize'}, {name: 'Carlos', age: 24, country: 'Panama'}, {name: 'Douglas', age: 26, country: 'Guatemala'}, {name: 'Emilio', age: 28, country: 'Mexico'}, {name: 'Fabio', age: 30, country: 'Canada'}, {name: 'Geovanny', age: 21, country: 'Nicaragua'}, {name: 'Hugo', age: 23, country: 'Colombia'}, {name: 'Julio', age: 25, country: 'Paraguay'}, {name: 'Kirt', age: 27, country: 'Brazil'}],
      nameFromInput: null
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.findNameInObj = this.findNameInObj.bind(this);
  }
 //find Name in Object in arrayOfNames method
  findNameInObj() {
    let array = this.state.arrayOfNames;
    //boolean to keep track if name is found
    let isNameNotInList = false;
    //loop through the arrayOfNamesArray to find match
    for (let i = 0; i < array.length; i++) {
      //if name value is matching the name from input
      if (array[i].name === this.state.nameFromInput) {
        //alert the age and country information that matches the name from input
        alert (`Age is ${array[i].age} and Country is ${array[i].country}`);
        //set boolean to true;
        isNameNotInList = true;
      }
    }
    // if the isNamenotInList boolean is false
    if (isNameNotInList === false) {
      //alert 'Name not Found'
      alert('Name not found');
    }
  }
//method to receive inputs from user and save it in the state
  onHandleChange(e){
    let name = e.target.value;
    //set the state with the input
    this.setState({
      nameFromInput: name
    });

  }

  render() {
  return (
    <div>
      <h2>Please Write a Name</h2>
      <label>
        Name:
    <input type='text' onChange={this.onHandleChange}/>
    <button onClick={this.findNameInObj}>Submit</button>
    </label>
    </div>
  )
  }
}

export default App;
