import React, { Component } from 'react';
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import API from "../utils/API"
class Teams extends Component {
state = {
	data: []
}
getAllTeams() {
	API.getTeams().then( (result) => {
		this.setState({
			data: result
		})
	}).then(console.log(this.state.data))
}
componentDidMount(){
	this.getAllTeams();
}
	render() {
		return (
			<MainPanel>
			<MainNav />
			<p> TEAMSLKSJ DFLKJS D</p>
		</MainPanel>
		);
	}
}

export default Teams;