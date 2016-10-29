import React from 'react'
import ReactDOM from 'react-dom'
import {Searchform} from './search-form'
import axios from 'axios'
import {Router,Route,hashHistory,link} from 'react-router'

const Header = (props) => (
    <header>
        <h1>{props.name}</h1>
        
    </header>
)

const Movies = (props) => (
    <ul>
        {
            props.movies.map((movies,i) => (
                    <li key={i}>
                        <h4>{ movies.Title }</h4>
                        <img src={ movies.Poster} />
                    </li>
                )
            )
        }
    </ul>
)

class Search extends React.Component {
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
                console.log(movie)
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

class Home extends React.Component{
    render(){
        return(
            <h1>This is Home</h1>
        )
    }
}

class Main extends React.Component{


    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/"
                    component={Home}
                />
                <Route path="/search"
                    component={Search}
                />
            </Router>
        )
    }
}


ReactDOM.render(<Main/> , document.getElementById('app'))
