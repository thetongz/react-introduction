const name = "TheTonG-React"

import React from 'react'
import ReactDOM from 'react-dom'

const Searchform = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">Search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.name}</h1>
        <Searchform />
    </header>
)

const Items = (props) => (
    <ul>
        {
            props.items.map(items => (
                    <li>{ items }</li>
                )
            )
        }
    </ul>
)

const Content = (props) => (
    <section>
        <p>{props.content.toTimeString()}</p>
        <Items items = {props.items}/>
    </section>
)

const App = () => {
    const name = "frontech"
    const content = new Date()
    const items = [
        "Kahn",
        "John",
        "Leica",
        "Mercy"
    ]

    return(
        <section>
            <Header name = {name}/>
            <Content 
                content = {content}
                items = {items}
            />
        </section>
    )
}



function run () {
    ReactDOM.render(<App/> , document.getElementById('app'))
}

setInterval(run , 500)
