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
        alert(this.state.films);
        e.preventDefault();
    }

    render() {
        const { films } = this.state;
        console.log(films);
        return (
            <div className="film-search">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter title of film" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" />
                </form>
                <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            {film.Title}
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

export default Search;
