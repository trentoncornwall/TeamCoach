import React, { Component } from 'react';
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import API from "../utils/API"
class Teams extends Component {
state = {
	data: []
}
getAllTeams() {
	API.allTeams().then((result) => {
		var dataArr = [];
        result.data.forEach(team => {
          dataArr.push(team);
        });
		this.setState({ data: dataArr });
		console.log(this.state)
	})
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