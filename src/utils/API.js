import axios from "axios";

export default {
    // Saves users in databse
    checkUsersToken: (token) => {
        return axios.post("/api/agencies/test", token);
    },

    registerClient: (newClient) => {
        return axios.post("/api/users/client", newClient);
    },

    registerUser: (newUser) => {
        return axios.post("/api/users/register", newUser);
    },

    loginUser: (user) => {
        return axios.post("/api/users/login", user);
    }
}