const name = "TheTonG-React"

import React from 'react'
import ReactDOM from 'react-dom'

function onSearchClick(event){
    event.preventDefault()
    console.log("onSearchClick",event)
}

const Searchform = () => {
    return (
        <form>
            <input type="text" />
            <button onClick={onSearchClick}>Search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.name}</h1>
        <Searchform />
    </header>
)

const Movies = (props) => (
    <ul>
        {
            props.movies.map(movies => (
                    <li key={movies.id}>{ movies.title }</li>
                    /*
                        or use (movies,i) then key={i}
                    */
                )
            )
        }
    </ul>
)

const Content = (props) => (
    <section>
        <Movies movies = {props.movies}/>
    </section>
)

const App = () => {
    const name = "frontech"
    const movies = [
        {
            id : 1,
            title : 'Snowden'
        },
        {
            id: 2,
            title : 'The Accountant'
        },
        {
            id: 3,
            title : "Don't Breathe"
        }
    ]

    return(
        <section>
            <Header name = {name}/>
            <Content 
                movies = {movies}
            />
        </section>
    )
}


ReactDOM.render(<App/> , document.getElementById('app'))
