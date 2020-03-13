// create your App component here
import React from 'react';


export default class App extends React.Component {
    state = {
        peopleInSpace: []
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp=>resp.json())
        .then(thing => this.setState({ peopleInSpace: thing }))
    }
    render(){
        return(
            <div>
            {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}