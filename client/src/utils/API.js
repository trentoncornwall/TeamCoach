import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  postUser: function(user) {
    return axios.post("/api/users");
  }
};
