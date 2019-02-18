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
                <div className="row">
                    {films.map(film => (
                        <div className="col-4" key={film.imdbID}>
                            <h3>{film.Title}</h3>
                            <img src={film.Poster} className="img-responsive"/>
                            <p>
                                {film.Released}
                                {film.Rated}
                                {film.Runtime}
                                {film.Genre}
                                {film.Plot}
                                {film.Actors}
                                {film.imdbRating}
                            </p>
                         </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default Search;
