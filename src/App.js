import React from 'react';
import FilterableList from "./FilterableList";
import FilterOptionsContainer from "./FilterOptionsContainer";
import AddListItemForm from "./AddListItemForm";
import './App.css'

const PRIORITY = {
  'High': 1,
  'Med': 2,
  'Low': 3
}

const sortAlphaHelper = (a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

const sortDateHelper = (a, b) => {
  return new Date(a.date) - new Date(b.date);
}

const sortPriorityHelper = (a, b) => {
  let priorityA = PRIORITY[a.priority];
  let priorityB = PRIORITY[b.priority];

  if (priorityA < priorityB) {
    return -1;
  }
  if (priorityA > priorityB) {
    return 1;
  }
  return 0;
}

const shuffle = (array) => {
  let curr = array.length;
  let temp;
  let randomIndex;

  while (0 !== curr) {
    randomIndex = Math.floor(Math.random() * curr);
    curr -= 1;

    temp = array[curr];
    array[curr] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nameList: [{id: 1, name: "Abraham", date: "2016-08-10", priority: "Low"}, {id: 2, name: "Betsy", date: "2016-05-08", priority: "High"}, {id: 3, name: "Johnny", date: "2017-01-30", priority: "Med"}, {id: 4, name: "Jameson", date: "2017-03-04", priority: "Med"}, {id: 5, name: "Randy", date: "2018-02-10", priority: "High"}, {id: 6, name: "Kendra", date: "2019-02-15", priority: "Med"}, {id: 7, name: "Mathis", date: "2017-02-11", priority: "Low"}, {id: 8, name: "Ben", date: "2019-04-11", priority: "Med"}, {id: 9, name: "Cindy", date: "2014-07-01", priority: "High"}, {id: 10, name: "Neymar", date: "2016-09-10", priority: "Med"}, {id: 11, name: "Daniel", date: "2019-10-10", priority: "Low"}, {id: 12, name: "Xavier", date: "2018-04-04", priority: "Med"}],
      // highestIndex: 12
      // // nameList: [],
      // // highestIndex: 0
    }
  }

  onFilterOptionClickHandler = (filterOptionEvent) => {
    filterOptionEvent.preventDefault();
    // let nameList = this.state.nameList;
    let nameList = this.props.nameList;

    switch(filterOptionEvent.target.innerText) {
      case 'A-Z':
        nameList.sort((a, b) => sortAlphaHelper(a, b));
        break;
      case 'Z-A':
        nameList.sort((a, b) => sortAlphaHelper(a, b));
        nameList.reverse();
        break;
      case 'Random':
        nameList = shuffle(nameList);
        break;
      case 'Chronological':
        nameList.sort((a, b) => sortDateHelper(a, b));
        break;
      case 'Reverse Chronological': 
        nameList.sort((a, b) => sortDateHelper(a, b));
        nameList.reverse();
        break;
      case 'Priority':
        nameList.sort((a, b) => sortPriorityHelper(a, b));
        break;
      default:
        console.log("what on earth happened?");
    }

    this.setState({
      nameList 
    });
  }

  onAddItemClickHandler = (addItemClickEvent) => {
    addItemClickEvent.preventDefault();
    let formInputs = addItemClickEvent.target;
    // let newNameList = this.state.nameList;
    // let newIndex = this.state.highestIndex + 1;
    let newNameList = this.props.nameList;
    let newIndex = this.props.highestIndex + 1;
    let newItem = {
      id: newIndex,
      name: formInputs[0].value,
      date: formInputs[1].value,
      priority: formInputs[2].value
    }

    newNameList.push(newItem);

    this.props.addItem(newNameList, newIndex);

    // this.setState({
    //   nameList: newNameList,
    //   highestIndex: newIndex
    // })
  }

  onDoneButtonClickHandler = (id) => {
    let itemId = id;
    
    this.props.doneItem(itemId);
  }

  render() {
    return (
      <div className="App">
        <FilterOptionsContainer onFilterOptionClickHandler={this.onFilterOptionClickHandler} />
        <FilterableList 
          // nameList={this.state.nameList}
          nameList={this.props.nameList}
          onDoneButtonClick={this.onDoneButtonClickHandler}
        />
        <AddListItemForm onAddItemClick={this.onAddItemClickHandler}/>
        {this.props.quote}
      </div>
    );
  }
}

export default App;
