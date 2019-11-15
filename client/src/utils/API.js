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
  }
};
