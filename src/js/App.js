import React, { Component } from 'react';
import SinglePage from './components/SinglePage/SinglePage';
import Favourites from './components/Favourites/Favourites';
import Menu from './components/Menu/Menu';
import todosObject from '../books.json';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      ficcionBooks: [],
      noFiccionBooks: [],
      filterText: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  componentDidMount() {
      this.createArrays();
  }

  createArrays() {
    const array = [];
    const booksArray = [];
    const booksFiccionArray = [];
    const booksNoFiccionArray = [];

    const allBooks = array.concat(todosObject);  //concat porque todosObject es un objecto, no un array
    const {books, ficcionBooks, noFiccionBooks} = this.state;
    
    booksArray.push(allBooks[0]);
    booksFiccionArray.push(allBooks[0].ficcion);
    booksNoFiccionArray.push(allBooks[0].noFiccion);

    this.setState({
      books: books.concat(booksArray),
      ficcionBooks: ficcionBooks.concat(booksFiccionArray), 
      noFiccionBooks: noFiccionBooks.concat(booksNoFiccionArray)
    });
  }

  handleChangeText(event) {
    const {filterText} = this.state;
    this.setState({
      filterText: event.target.value
    });
    console.log(filterText);
  }

  resetInput(event) {
      this.setState({
        filterText: ''
      });
  }

  render() {
    const ficcionBooksTitle = 'Los libros más vendidos de ficción';
    const ficcionBooksText = 'Descubre cuáles son los libros más vendidos de este año con este ránking de bestsellers. Los libros más leídos de romántica, thriller, juvenil, novelas, libros de no ficción y mucho más lo encontrarás aquí.';

    const noFiccionBooksTitle = 'Los libros más vendidos de no ficción';
    const noFiccionBooksText = 'Ensayos, biografías, libros de historia, empresa, bienestar... Descubre cuáles son los bestsellers de los libros de no ficción.';

    const favouritesTitle = 'Crea una lista de tus libros favoritos!';
    
    return (
      <div className="App">
      
        <div className="buttons-container">
          <button onClick={this.resetInput}>  <Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de ficción </Link></button>
          <button onClick={this.resetInput}> <Link to='/noFiccion' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros de no ficción</Link></button>
          <button onClick={this.resetInput}> <Link to='/favourites' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros favoritos</Link></button>
          
        </div>
        <Switch>
        
          <Route exact path='/' render={(props) => <SinglePage {...props} backgroundImage='ficcion-background-image' spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
          <Route path='/noFiccion' render={(props) => <SinglePage backgroundImage='no-ficcion-background-image'  {...props} spArray={this.state.noFiccionBooks} title={noFiccionBooksTitle} text={noFiccionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
          <Route path='/favourites' render={(props) => <Favourites {...props} title={favouritesTitle}  />}/>
        </Switch>
      </div>
    )
  }
}

export default App;

