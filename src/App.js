import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({ peopleInSpace: data.people })
        })
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}    
            </div>
        )
    }
}

export default App;