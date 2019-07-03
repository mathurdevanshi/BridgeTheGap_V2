import axios from "axios";

export default {
    // Saves users in databse
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