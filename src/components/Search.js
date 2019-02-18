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
        alert(`A film title was submitted: ${this.state.value}`)
        e.preventDefault();
    }

    render() {
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
            </div>
        )
    }
}

export default Search;
