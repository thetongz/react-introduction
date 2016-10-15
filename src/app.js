const name = "TheTonG-React"

import React from 'react'
import ReactDOM from 'react-dom'
import Test from './test'

const TheTong = () => {
    return <div> <h1>My react app</h1> </div>
}

ReactDOM.render(<TheTong /> , document.getElementById('app'))
ReactDOM.render(<Test /> , document.getElementById('apps'))