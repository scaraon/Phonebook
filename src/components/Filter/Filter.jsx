import { Component } from "react";

export default class Filter extends Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <>
        {" "}
        <input onChange={handleFilter} type="text" />
      </>
    );
  }
}
