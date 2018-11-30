import React, { Component } from 'react';
import SinglePage from './components/SinglePage/SinglePage';
import Favourites from './components/Favourites/Favourites';
import todosObject from '../books.json';
import { Link, Route, Switch } from 'react-router-dom';

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
    this.renderSinglePage = this.renderSinglePage.bind(this);
    this.renderSinglePageOnDelay = this.renderSinglePageOnDelay.bind(this);
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
    console.log('booksArray', booksArray);
    console.log('booksFiccionArray', booksFiccionArray);

    this.setState({
      books: books.concat(booksArray),
      ficcionBooks: ficcionBooks.concat(booksFiccionArray),  //Aqui la clave!!!
      noFiccionBooks: noFiccionBooks.concat(booksNoFiccionArray)
    });

    console.log('this.state.ficcionBooks', this.state.ficcionBooks);
    console.log('books actuslizado', this.state.books);
  }

  handleChangeText(event) {
    const {filterText} = this.state;
    this.setState({
      filterText: event.target.value
    });
    console.log(filterText);
  }

  resetInput(event) {
    const {filterText} = this.state;
      this.setState({
        filterText: ''
      });
  }

  renderSinglePage(){
    const ficcionBooksTitle = 'Los libros más vendidos de ficción';
    const ficcionBooksText = 'Descubre cuáles son los libros más vendidos de este año con este ránking de bestsellers. Los libros más leídos de romántica, thriller, juvenil, novelas, libros de no ficción y mucho más lo encontrarás aquí.';

    const noFiccionBooksTitle = 'Los libros más vendidos de no ficción';
    const noFiccionBooksText = 'Ensayos, biografías, libros de historia, empresa, bienestar... Descubre cuáles son los bestsellers de los libros de no ficción.';
    console.log(this.state.ficcionBooks);
    return (
      <div>
          <SinglePage spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />
      </div>
    )
  }

  renderSinglePageOnDelay() {
    return setTimeout(this.renderSinglePage.bind(this), 2000)
  }

  render() {
    const renders = this.renderSinglePageOnDelay();
    const ficcionBooksTitle = 'Los libros más vendidos de ficción';
    const ficcionBooksText = 'Descubre cuáles son los libros más vendidos de este año con este ránking de bestsellers. Los libros más leídos de romántica, thriller, juvenil, novelas, libros de no ficción y mucho más lo encontrarás aquí.';

    const noFiccionBooksTitle = 'Los libros más vendidos de no ficción';
    const noFiccionBooksText = 'Ensayos, biografías, libros de historia, empresa, bienestar... Descubre cuáles son los bestsellers de los libros de no ficción.';
    
    return (
      <div className="App">
        <button onClick={this.resetInput} className={'button-style'}>  <Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de ficción </Link></button>
        <button onClick={this.resetInput} className={'button-style'}> <Link to='/noFiccion' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros de no ficción</Link></button>
        <button onClick={this.resetInput} className={'button-style'}> <Link to='/favourites' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros favoritos</Link></button>
        <Switch>
          <Route exact path='/' render={(props) => <SinglePage {...props} spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
          <Route exact path='/noFiccion' render={(props) => <SinglePage {...props} spArray={this.state.noFiccionBooks} title={noFiccionBooksTitle} text={noFiccionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
          <Route exact path='/favourites' render={(props) => <Favourites {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;

// <SinglePage spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />

// spArray={this.state.ficcionBooks[0][0]} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText}


// <div className="App">
//         <button onClick={this.resetInput} className={'button-style'}>  <Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}} > Libros de ficción </Link></button>
//         <button onClick={this.resetInput} className={'button-style'}> <Link to='/noFiccion' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros de no ficción</Link></button>
//         <button onClick={this.resetInput} className={'button-style'}> <Link to='/favourites' style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>Libros favoritos</Link></button>
//         <Switch>
//           <Route exact path='/' render={(props) => <SinglePage {...props} spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
//           <Route exact path='/noFiccion' render={(props) => <SinglePage {...props} spArray={this.state.noFiccionBooks} title={noFiccionBooksTitle} text={noFiccionBooksText} filterText={this.state.filterText} onChangeText={this.handleChangeText} />}/>
//           <Route exact path='/favourites' render={(props) => <Favourites {...props} />}/>
//         </Switch>
//       </div>




// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//           data: [],
//           idAlcoholic: []
//       }
//     }

//     requestInfo() {
//         var apiAlcoholicCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`).then(response => response.json());
//         var apiNotAlcoholicCocktails = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response => response.json());
//         var combinedData = [apiAlcoholicCocktails, apiNotAlcoholicCocktails];
//         Promise.all(combinedData).then(c => {
//         let allCocktailsData = this.state.data;
//         allCocktailsData.push(c);
//         const apelloDrink = allCocktailsData[0][1].drinks.filter( (g, index) => g.strDrink === 'Apello');
//         this.setState({
//           data:allCocktailsData,
//           idAlcoholic:allCocktailsData[0][1].drinks.map( (g, index) => g.idDrink)
//        });
//        console.log(this.state.data);
//        console.log(this.state.idAlcoholic);
//        console.log(apelloDrink);
//        console.log(apelloDrink[0].strDrink);
//         //   this.requestInfoGinDrinks();
//         //   this.requestInfoVodkaDrinks();
//       })
//       }
  
//       componentDidMount(){
//         this.requestInfo();
//       }
   
//     render() {
//       return (
//           <h1>Hola</h1>
//       );
//     }
//   }

//   export default App;



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       seo_title: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }
//   render() {
//     const { seo_title } = this.state;
//     return (
//       <form id="article-form">
//         <Input
//           text="SEO title"
//           label="seo_title"
//           type="text"
//           id="seo_title"
//           value={seo_title}
//           handleChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }
