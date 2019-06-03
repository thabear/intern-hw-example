import React from "react";

export default class FilterOption extends React.Component {

  render() {
    return (
      <button
        onClick={(e) => this.props.onFilterOptionClick(e)}
      >
        {this.props.name}
      </button>
    );
  }
}