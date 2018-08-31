import React, { Component } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';
import './App.css';
import data from '../src/data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort_term: '', movies: data.movies, modMovies : data.movies,
    };
    this.onSorting = this.onSorting.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }
  onSorting = (e) => {
    let term = 'Title';
    let option = e.target.value;
    let sortedList = [...this.state.movies].sort((a, b) => {
      return (option === 'asc' ? (a[term] >= b[term] ? 1 : -1) :
        (a[term] <= b[term] ? 1 : -1))
    });
    this.setState({ sort_term: term , modMovies: sortedList });
  }

  searchMovie(e){
    let key = e;
    console.log(e);
    const { movies } = this.state;
    if(!key) {
      let orgList = movies.map(movie => { return movie });
      this.setState({ modMovies : orgList });
    } 
    else {
      let list  = movies.filter(movie => { 
        return movie.Title.toLowerCase().includes(key.toLowerCase()); 
      });
      this.setState({ modMovies : list });
    }
  }

  render() {
   const { modMovies } = this.state;
   if (!modMovies.length){
     return (
      <div className="App">
        <Header sort_term={this.state.sort_term}
           onSorting={this.onSorting} 
           searchHandler={this.searchMovie}  />  <br/>
           <h4>No Data to display</h4>
        </div>
     )
   }
    return (
      <div className="App">
        <Header sort_term={this.state.sort_term}
          onSorting={this.onSorting} 
          searchHandler={this.searchMovie}  />
        <Table movies={this.state.modMovies} />
      </div>
    );
  } 
}

export default App;
