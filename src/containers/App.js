import React, { Component } from 'react';
import './App.css';
import Slideshow from '../components/Slideshow'
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: '',
      page: 1
    }
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => { return response.json(); })
      .then(results => { this.setState({ characters: results.results }) })
      .catch(() => <h1 className="title">Not available at the moment</h1>)
  }

  componentWillUpdate() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
    .then(response => { return response.json(); })
    .then(results => { this.setState({ characters: results.results }) })
      .catch(() => <h1 className="title">Not available at the moment</h1>)
    
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  onPageChange = (event) => {
    this.setState({ page: event.target.value });
  }

  render() {
    console.log(this.state);
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return(
      <div className="tc">
        <img src="https://i.ya-webdesign.com/images/rick-and-morty-logo-png-1.png" alt="logo" className="logo ma4"></img>
        <h1 className="tc pa3 ma2 title">CHARACTER COMPENDIUM</h1>
        <p className="tc pa2 ma2 page-selec">Select a page from 1 to 20</p>
        <input type="number" name="quantity" min="1" max="20" onChange={this.onPageChange}></input>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Slideshow characters = {filteredCharacters}/>
      </div>
    )
  
  }
}
export default App;
