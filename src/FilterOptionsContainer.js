import React from 'react';
import FilterOption from './FilterOption';

export default class FilterOptionsContainer extends React.Component {


  render() {
    return (
      <div>
        <FilterOption 
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="A-Z"
        />
        <FilterOption 
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="Z-A"
        />
        <FilterOption 
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="Random"
        />
        <FilterOption 
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="Chronological"
        />
        <FilterOption 
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="Reverse Chronological"
        />
        <FilterOption
          onFilterOptionClick={this.props.onFilterOptionClickHandler}
          name="Priority"
        />
      </div>
    );
  }
}