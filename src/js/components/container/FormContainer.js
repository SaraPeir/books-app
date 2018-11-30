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
//         console.log('requestInfo');
//         var apiAlcoholicCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`).then(response => response.json());
//         var apiNotAlcoholicCocktails = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response => response.json());
//         var combinedData = [apiAlcoholicCocktails, apiNotAlcoholicCocktails];
//         Promise.all(combinedData).then(c => {
//         let allCocktailsData = this.state.data;
//         allCocktailsData.push(c);
//         console.log(this.state.data);
//         this.setState({
//           data:allCocktailsData,
//           idAlcoholic:allCocktailsData[0][1].drinks.map( (g, index) => g.idDrink)
//        });
       
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

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Input from "../presentational/Input";
// class FormContainer extends Component {
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
// export default FormContainer;

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;