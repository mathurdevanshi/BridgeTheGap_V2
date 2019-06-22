import axios from "axios";

export default {
  // Gets all books
  getNewBooks: function() {
    return axios.get("/api/users/");
  }
};
