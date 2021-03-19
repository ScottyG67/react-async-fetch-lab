// create your App component here
import React from 'react'

export default class App extends React.Component {
    state={
        names: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json").then(res=>res.json()).then(response => {this.setState({names: response.people})})
        // response => {this.setState({names: response.people})}
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}