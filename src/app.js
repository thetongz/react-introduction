import './app.scss'
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
            props.movies.map((movies,i) => {
                    const query = {
                        pathname: '/detail',
                        query:{
                            id: movies.imdbID
                        }
                    }
                    return(
                        <li key={i}>
                            <h4><Link to={query}>{ movies.Title }</Link></h4>
                        </li>
                    )
                }
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
        this.title = props.location.query.s?props.location.query.s:""
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
                <Searchform onSearchSubmit = {this.onSearch.bind(this)} searchtitle={this.title}/>
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


class MovieDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            movie: {
                Title: "Unknown"
            }
        }
        if(props.location.query.id){
            const id = props.location.query.id
            axios.get(`http://www.omdbapi.com/?i=${id}&y=&plot=short&r=json`)
                .then(response =>{
                    const movie = response.data
                    this.setState({
                        movie: movie
                    })
                })
        }
    }

    render(){
        const {Title,Genre,Poster} = this.state.movie
        return(
            <section>
                <h1>{Title}</h1>
                <small>Genre : {Genre}</small>
                <div>
                    <img src={Poster} />
                </div>
            </section>
        )
    }
}

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
                    <IndexRoute component={Home} />
                    <Route path="detail" component={MovieDetail} />
                    <Route path="search" component={Search} />
                </Route>
            </Router>
        )
    }
}


ReactDOM.render(<Main/> , document.getElementById('app'))
