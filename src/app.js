import React from 'react'
import ReactDOM from 'react-dom'
import {Searchform} from './search-form'
import axios from 'axios'
import {Router,Route,hashHistory,Link,IndexRoute} from 'react-router'

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
        if(props.location.query.s){
            this.onSearch(props.location.query.s)
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

const BatmanQuery ={
    pathname: '/search',
    query: {
        s: "batman"
    }
}
const CaptainAmerica ={
    pathname: '/search',
    query: {
        s: "Captain America"
    }
}
const JasonBourne ={
    pathname: '/search',
    query: {
        s: "Jason Bourne"
    }
}

const Home = () =>(
    <section>
        <h1>This is home, right?</h1>
        <ul>
            <li><Link to={BatmanQuery}>Batman</Link></li>
            <li><Link to={CaptainAmerica}>Captain America</Link></li>
            <li><Link to={JasonBourne}>Jason Bourne</Link></li>
        </ul>
    </section>
)

const Detail = () =>(
    <section>
        <h1>De de de dee de de detail</h1>
    </section>
)

const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/detail"> Detail </Link></li>
            <li><Link to="/search"> Search </Link></li>
        </ul>
    </nav>
)

const App = props => (
    <section>
        <Nav />
        {props.children}
    </section>
)

class Main extends React.Component{


    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App} >
                    <IndexRoute path="home" component={Home} />
                    <Route path="detail" component={Detail} />
                    <Route path="search" component={Search} />
                </Route>
            </Router>
        )
    }
}


ReactDOM.render(<Main/> , document.getElementById('app'))
