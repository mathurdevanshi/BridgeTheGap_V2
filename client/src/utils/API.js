import axios from "axios";

export default {
  // Gets all books
  saveUser: function(newUser) {
    return axios.post("/api/users/", newUser);
  }
};
