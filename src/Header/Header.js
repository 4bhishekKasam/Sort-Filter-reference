import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: "" };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({ searchKey: e.target.value });
  //  console.log(e.target.value);
    this.props.searchHandler(e.target.value);
  }

  render() {
    const { onSorting } = this.props;

    return (
      <div className="nav">
        <ul className="navLeft">
          <li>
            <form>
              <select onChange={onSorting} className="filterBox">
                <option value="asc"> Sort (A - Z)</option>
                <option value="desc"> Sort (Z - A) </option>
              </select>
            </form>
          </li>
          <li>
            <form>
              <input
                type="search"
                placeholder="Search by..."
                className="searchBar"
                onChange={this.onSearch}
                value={this.state.searchKey}
              />
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
