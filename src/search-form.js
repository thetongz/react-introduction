import React from 'react'

export class Searchform extends React.Component{

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