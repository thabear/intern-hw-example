import React from 'react';
import "./FilterableList.css"

// export default class FilterableList extends React.Component {
//   mapNameList = () => {
//     let list = this.props.nameList;
//     return list.map(item => (
//       <li key={item.id}>
//         <div>{item.name}</div>
//         <div>{item.date}</div>
//       </li>
//     ));
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.mapNameList()}
//         </ul>
//       </div>
//     );
//   }
// }

const mapNameList = (nameList, props) => {
  return nameList.map(item => (
    <li key={item.id}>
      <div>{item.name}</div>
      <div>{item.date}</div>
      <div>{item.priority}</div> 
      <button onClick={(e) => props.onDoneButtonClick(item.id)}>X</button>
    </li>
  ));
}

const FilterableList = (props) => {
  let nameList = props.nameList;
  return (
    <div id="listContainer">
      <ul>
        {mapNameList(nameList, props)}
      </ul>
    </div>
  )
}

export default FilterableList;
