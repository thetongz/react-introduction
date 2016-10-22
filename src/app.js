import React from 'react'
import ReactDOM from 'react-dom'

class Searchform extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }


    onQueryChange(event){
        const query = event.target.value
        console.log('this.onQueryChange' , query)
        this.setState({
            query: query
        })
    }

    onSearchClick(event){
        event.preventDefault()
        console.log("onSearchClick",this.state.query)
    }

    render(){
        return (
            <form>
                <input type="text" 
                    value={this.state.query} 
                    onChange={this.onQueryChange.bind(this)}
                />
                <button onClick={this.onSearchClick.bind(this)}>Search</button>
            </form>
        )
    }
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
