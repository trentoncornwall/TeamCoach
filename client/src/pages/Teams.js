import React, { Component } from 'react';
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import TeamName from "../components/TeamName"
import TeamList from "../components/TeamList"
import API from "../utils/API"
import MainTeamUsers from "../components/MainTeamUsers"
class Teams extends Component {
state = {
	data: [],
	teamUsers: []
}
onTeamClick(id) {
	const usersArray = id;
	this.setState({teamUsers: usersArray})
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
				<TeamList> 
					{this.state.data.map(team => (
          	<TeamName
							teamName={team.teamName}
							key={team._id}
							id={team._id}
							onClick={() => this.onTeamClick(team.users)}
          	/>
					))}
				</TeamList>
				<MainTeamUsers>
						{this.state.teamUsers.map(user => (
							<li>
							{user}
							</li>
								
						))}
				</MainTeamUsers>
		</MainPanel>
		);
	}
}

export default Teams;