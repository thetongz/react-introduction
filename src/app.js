import React from 'react'
import ReactDOM from 'react-dom'
import {Searchform} from './search-form'


const Header = (props) => (
    <header>
        <h1>{props.name}</h1>
        <Searchform />
    </header>
)

const Movies = (props) => (
    <ul>
        {
            props.movies.map((movies,i) => (
                    <li key={i}>{ movies.title }</li>
                )
            )
        }
    </ul>
)

const App = () => {
    const name = "frontech"
    const movies = [
        {
            title : 'Snowden'
        },
        {
            title : 'The Accountant'
        },
        {
            title : "Don't Breathe"
        }
    ]

    return(
        <section>
            <Header name = {name}/>
            <Movies 
                movies = {movies}
            />
        </section>
    )
}


ReactDOM.render(<App/> , document.getElementById('app'))
