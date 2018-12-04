import React, { Component } from 'react';
import './Favourites.css';
import FavouritesCard from '../FavouritesCards/FavouritesCards';
import Menu from '../Menu/Menu';

class Favourites extends Component {

    constructor() {
        super();
        this.state = {
            favourites: [],
            title: '',
            author: '',
            url: '',
            inputStyle: ''
            };
            this.changeTitle = this.changeTitle.bind(this);
            this.changeAuthor = this.changeAuthor.bind(this);
            this.changeUrl = this.changeUrl.bind(this);
            this.updateData = this.updateData.bind(this);
            this.deleteCard = this.deleteCard.bind(this);
      }

      componentWillMount() { //si quieres borrar todo, pone removeItem en cambio de getItem a lado de localStorage
        localStorage.getItem('favourites') && this.setState({
            favourites: JSON.parse(localStorage.getItem('favourites'))
        })
      }
    
      componentWillUpdate(nextProps, nextState){
        localStorage.setItem('favourites', JSON.stringify(nextState.favourites));
      }

      changeTitle(event) {
        const {title} = this.state;
        this.setState({
          title: event.target.value
        });
    }

    changeAuthor(event) {
        const {author} = this.state;
        this.setState({
        author: event.target.value
        });
    }

    changeUrl(event) {
        const {author} = this.state;
        this.setState({
        url: event.target.value
        });
    }

    resetTitle(){
        this.setState({
            title: ''
          });
      }

      resetAuthor(){
        this.setState({
            author: ''
          });
      }

      resetUrl(){
        this.setState({
            url: ''
          });
      }

    updateData(){
        const {title,  author, favourites, url} = this.state;
        const newTitle = title;
        const newAuthor = author;
        const newUrl = url;
        
        if(newTitle !== '' && newAuthor !== '') {
            const bookUrl = newUrl === '' ? 'https://educacion2.com/wp-content/uploads/El-mejor-libro.jpg' : newUrl;
            this.setState({
                favourites: favourites.concat({newTitle, newAuthor, bookUrl}),
                inputStyle: ''
            });
        } else {
            this.setState({
                inputStyle: 'fav-input-border-warning'
            });
            
        }
        console.log('favourites', this.state.favourites);
        this.resetTitle();
        this.resetAuthor();
        this.resetUrl();
    }

    deleteCard(title) {
        const filteredArray = this.state.favourites.filter(favourite => favourite.newTitle !== title)
        this.setState({favourites: filteredArray});
        console.log('filteredArray', this.state.favourites)
    }

    renderFavourites() {
        if (this.state.favourites.length > 0) {
            var cards = this.state.favourites.map((card, index) => {
                return (
                    <div key={index} className="col-xs-12 col-sm-6 col-lg-4 mt-3 mb-3 mt-sm-5 mb-sm-5">
                        <FavouritesCard title={card.newTitle} author={card.newAuthor} url={card.bookUrl} onClose={() => this.deleteCard(card.newTitle)} />
                    </div>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                        {cards} 
                    </div>
                </div>
            );
        }
    }
        

render() {
    return (
        <div>
            <div className='formbox-container'>
            <Menu />
                <p id="fav-page-title">{this.props.title}</p>
                <div className="form-box">
                    <input className={`fav-input-style ${this.state.inputStyle}`} placeholder="Título" type="text" onChange={this.changeTitle} value={this.state.title} />
                    <input className={`fav-input-style ${this.state.inputStyle}`} placeholder="Autor" type="text" onChange={this.changeAuthor} value={this.state.author} />
                    <input id="fav-url-input-style"  className="fav-input-style" placeholder="Url de imagen" type="text" onChange={this.changeUrl} value={this.state.url} />
                    <button className="fav-button" onClick={this.updateData}>¡Listo!</button>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {this.renderFavourites()}
                </div>
            </div>
        </div>
        );
    }
}

export default Favourites;


