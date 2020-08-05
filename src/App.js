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

  pruebaGet = async () => {
    let testVar = await getFilms();
    this.setState({movies: testVar})
    console.log(this.state.movies);
  }
  waitResponse =()=>{
      return this.state.isloading && 
      (<MoviesList movies={this.state.movies}/>)
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
