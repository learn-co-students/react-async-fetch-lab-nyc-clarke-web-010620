// create your App component here
import React from 'react'


class App extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
         fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
                .then(body => this.setState({data: body}))
    }

    render(){
        return(
            <div>test</div>
        )
    }


}

export default App