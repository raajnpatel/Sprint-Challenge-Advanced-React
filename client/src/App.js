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
            {props.players.map(player => (
                <div key = {player.id}>
                    {player.name}
                    {player.id}
                    {player.country}
                    {player.searches}
                </div>
            ))}
        </div>
    )
    }

export default App;