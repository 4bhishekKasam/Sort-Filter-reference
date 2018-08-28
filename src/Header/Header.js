import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const {  onSorting } = this.props;

        return (
            <div className="nav">
                <ul className="navLeft">
                    <li >
                        <form >
                            <select onChange={onSorting}
                                className="searchBar">

                                <option value="asc"> Sort (A - Z)</option>
                                <option value="desc"> Sort (Z - A) </option>

                            </select>
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
