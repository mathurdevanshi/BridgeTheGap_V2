import axios from "axios";

export default {
    lastShot: (data) => {
        return axios.post("http://localhost:3001/api/agencies/shot", data);
    },
    // https://afternoon-sierra-25981.herokuapp.com
    // getAllAgencyDataCommunity: () => {
    //     return axios.post("http://localhost:3001/api/agencies/getAllDataCommunity");
    // },

    getAllAgencyData: () => {
        return axios.post("http://localhost:3001/api/agencies/getAllData");
    },

    saveDataToInventory: (data) => {
        return axios.post("http://localhost:3001/api/agencies/insertData", data);
    },

    checkUsersToken: (token) => {
        return axios.post("http://localhost:3001/api/agencies/authorize", token);
    },

    registerClient: (newClient) => {
        return axios.post("http://localhost:3001/api/users/client", newClient);
    },

    registerUser: (newUser) => {
        return axios.post("http://localhost:3001/api/users/register", newUser);
    },

    loginUser: (user) => {
        return axios.post("http://localhost:3001/api/users/login", user);
    }
}