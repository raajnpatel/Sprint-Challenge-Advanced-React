import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then (res => res.json())
            .then (data => this.setState({players:data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }

    render(){
        return(
            <div className = "App">
                <SoccerPlayer players = {this.state.players} />
            </div>
        );
    }
}

export default App;