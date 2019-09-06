import React from 'react';
import './App.css';
import DarkMode from "./hooks/DarkMode";

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

    function SoccerPlayer(props) {
    const [darkMode, setDarkMode] = DarkMode(false);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <div>
            <button onClick = {toggleDark}>Dark Mode</button>
            <div className = "innerCard">
            {props.players.map(player => (
                <div className = "playerCard" key = {player.id}>
                    <h1>{player.name}</h1>
                    <p>{(player.id)+1}</p>
                    <h2>{player.country}</h2>
                    <p>{player.searches}</p>
                </div>
            ))}
            </div>
        </div>
    )
    }

export default App;