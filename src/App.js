import React from 'react'


class App extends React.Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
    }


    render() {
        return(<div>hi</div>)
    }
}

export default App