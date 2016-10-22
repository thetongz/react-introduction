import React from 'react'
import ReactDOM from 'react-dom'
import {Searchform} from './search-form'
import axios from 'axios'

const Header = (props) => (
    <header>
        <h1>{props.name}</h1>
        
    </header>
)

const Movies = (props) => (
    <ul>
        {
            props.movies.map((movies,i) => (
                    <li key={i}>{ movies.Title }</li>
                )
            )
        }
    </ul>
)

class App extends React.Component {
    constructor(props){
        super(props)
        this.name = "frontech"
        this.state = {
            movies: []
        }
    }

    onSearch(query){
        event.preventDefault()
        axios.get(`http://www.omdbapi.com/?s=${query}&y=&plot=short&r=json`)
            .then(response => {
                const movie = response.data.Search
                this.setState({
                    movies: movie
                })
            })
        
    }

    render(){
        return(
            <section>
                <Header name = {this.name} />
                <Searchform onSearchSubmit = {this.onSearch.bind(this)}/>
                <Movies movies = {this.state.movies} />
            </section>
        )
    }
}


ReactDOM.render(<App/> , document.getElementById('app'))
