import React, {Component} from 'react';

class Film extends Component {
    state = {
        film: ''
    }

    componentDidMount() {
        const url = "http://www.omdbapi.com/?i=tt3896198&apikey={REACT_APP_API_KEY}";
        fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                film: result
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.film.Title}</h1>
                <img src={this.state.film.Poster} alt={this.state.film.Title}/>
                <p>{this.state.film.Released}</p>
                <p>{this.state.film.Rated}</p>
                <p>{this.state.film.Runtime}</p>
                <p>{this.state.film.Genre}</p>
                <p>{this.state.film.Plot}</p>
                <p>{this.state.film.Actors}</p>
                <p>{this.state.film.Plot}</p>
                <p>IMDB Rating: {this.state.film.imdbRating}</p>
            </div>
        )
    }
}

export default Film;
