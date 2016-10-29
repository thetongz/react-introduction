import React from 'react'


export class Searchform extends React.Component{

    constructor(props){
        super(props)
        if(props.searchtitle){
            this.state = {
                query: props.searchtitle
            }
        }else{
            this.state = {
                query: ''
            }
        }
    }

    onSearchClick(event){
        event.preventDefault()
        this.props.onSearchSubmit(this.state.query)
    }

    onQueryChange(event){
        const query = event.target.value
        console.log('this.onQueryChange' , query)
        this.setState({
            query: query
        })
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