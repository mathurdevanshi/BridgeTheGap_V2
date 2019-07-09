import axios from "axios";

export default {
    getAllAgencyDataCommunity: () => {
        return axios.post("/api/agencies/getAllDataCommunity");
    },

    getAllAgencyData: () => {
        return axios.post("/api/agencies/getAllData");
    },
    
    saveDataToInventory: (data) => {
        return axios.post("/api/agencies/insertData", data);
    },

    checkUsersToken: (token) => {
        return axios.post("/api/agencies/authorize", token);
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