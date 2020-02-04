import axios from "axios";

export default {
  // user path
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  postUser: function(data, id) {
    return axios.post("/api/teams/" + id, { data });
  },
  putUser: function(data, id) {
    return axios.put("/api/users/" + id, { data });
  },
  deleteUser: function(data) {
    return axios.delete("/api/users", { data });
  },

  // team paths
  allTeams: function() {
    return axios.get("/api/teams");
  },
  getOneTeam: function(id) {
    return axios.get("/api/teams/find/" + id);
  },
  updateTeam: function(data, id) {
    return axios.get("/api/teams/find/" + id, { data });
  },
  createTeam: function(data) {
    return axios.post("/api/teams", { data });
  },
  getTeamUsers: function(data) {
    return axios.get("/api/teams/users");
  },

  //plan paths

  postPlan: function(data, id) {
    return axios.post("/api/plans/" + id, { data });
  },
  getPlan: function(id) {
    return axios.get("/api/plans/" + id);
  },
  updatePlan: function(data, id) {
    return axios.put("/api/plans/" + id, { data });
  },

  //auth paths
  checkLogin: function(data) {
    return axios.post("/api/login/", data);
  },
  checkCurrent: function() {
    return axios.get("/api/login/current");
  },
  logOut: function() {
    return axios.get("api/login/logout");
  }
};
