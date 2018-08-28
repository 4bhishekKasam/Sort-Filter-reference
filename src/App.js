import React, { Component } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';
import './App.css';
import data from '../src/data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort_term: '', movies: data.movies
    };
    this.onSorting = this.onSorting.bind(this);
  }
  onSorting = (e) => {
    let term = 'Title';
    let option = e.target.value;
    let sortedList = [...this.state.movies].sort((a, b) => {
      return (option === 'asc' ? (a[term] >= b[term] ? 1 : -1) :
        (a[term] <= b[term] ? 1 : -1))
    });
    this.setState({ sort_term: term });
    this.setState({ movies: sortedList });
  }

  render() {
    //   const { movies } = this.state;
    return (
      <div className="App">
        <Header sort_term={this.state.sort_term}
          onSorting={this.onSorting} />

        <Table movies={this.state.movies} />

      </div>
    );
  }
}

export default App;
