import axios from "axios";

export default {

  // Saves users in database
  registerUser: function(newUser) {
    return axios.post("/api/users/register", newUser);
  },

  loginUser: function(user) {
    return axios.post("/api/users/login", user);
  }
};
