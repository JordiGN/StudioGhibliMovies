import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './components/MoviesList'
import { getFilms } from './services/API';
import axios from 'axios';

class App extends React.Component {

  state={
    isloading:true,
    movies: [],
  }

  // pruebaGet = () => {
  //   alert("si entra al pruebaGet")
  //   let testVar = getFilms()
  //   this.setState({movies: testVar})
  //   console.log(this.state.movies);
  // }

  pruebaGet = async () => {
    const URL = 'https://ghibliapi.herokuapp.com'
    try {
        const response = await axios.get(URL+'/films');
        console.log(response.data);
        this.setState({movies: response.data})
        //return response.data;
    } catch (error) {
        console.error(error);
    } }

  waitResponse = ()=>{
      return this.state.isloading && 
      (<MoviesList movies={this.state.movies}/>);
  }

  render(){

  
    return(
      <div>Prueba
        <button onClick={this.pruebaGet} >Prueba Get</button>
        {this.waitResponse()}
      </div>
      );
  
  }
}

export default App;
