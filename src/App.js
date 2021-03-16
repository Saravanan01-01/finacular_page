import React,{Component} from 'react';
import './App.css';

const img = 'https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/movies/movie12/movie12_ss0';
class App extends Component
{
   
    render(){
      let img_r = `${img}${this.props.id}.jpg`;
      let exp = `${this.props.exp}`;
        return (
            <div className="App">
            <h1 className="App-head">Pokenmon</h1>
            <img className="App-img" src={img_r} alt="pokemon here" height="60%" width="80%" />
            <h4>{exp}</h4>
        </div>
        );

    }
}


export default App;




