// create your App component here
import React, {Component} from 'react';

class App extends Component {

    state = {
        space: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json())
        .then(({people}) => {
            this.setState({
                space: people
            })
        })
    }

    render(){
        return(
        <div>
            {this.state.space.map((person, id) => <h1 key={id}>{person.name}</h1>)}
        </div>
        )

        
    }

}

export default App;