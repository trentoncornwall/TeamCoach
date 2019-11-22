import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  postUser: function(data, id) {
    return axios.post("/api/teams/" + id, { data });
  },
  deleteUser: function(data) {
    return axios.delete("/api/users", { data });
  },
  allTeams: function() {
    return axios.get("/api/teams");
  },
  createTeam: function(data) {
    return axios.post("/api/teams", { data });
  },
  getTeamUsers: function(data) {
    return axios.get("/api/teams/users");
  },
  postPlan: function(data, id) {
    return axios.post("/api/plans/" + id, { data });
  },
  getPlan: function(id) {
    return axios.get("/api/plans/" + id);
  },
  updatePlan: function(data, id) {
    return axios.put("/api/plans/" + id, { data });
  },
  checkLogin: function(data) {
    return axios.post("/api/login/" , data );
  },
  checkCurrent: function(){
    return axios.get("/api/login/current");
  }
};
