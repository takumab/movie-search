import React, {Component} from 'react'

class Search extends Component {
    state = {
        value: '',
        films: []
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (e) => {
        const url = `http://www.omdbapi.com/?s=${this.state.value}&apikey=e183fc31`
        fetch(url)
        .then(response => response.json())
        .then(results => {
            this.setState({
                films: results.Search
            })
        })
        e.preventDefault();
    }

    render() {
        const { films } = this.state;
        return (
            <div className="film-search">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control mr-2"
                            placeholder="Enter title of film" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                <div>
                    {films.map(film => (
                        <p key={film.imdbID}>
                            Title: {film.Title}
                            <img src={film.Poster} className="img-responsive"/>
                            Released: {film.Released}
                            Rated: {film.Rated}
                            Duration: {film.Runtime}
                            Genre: {film.Genre}
                            Summary: {film.Plot}
                            Actors: {film.Actors}
                            IMDB Rating: {film.imdbRating}
                         </p>
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default Search;
