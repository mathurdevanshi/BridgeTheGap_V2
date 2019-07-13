import axios from "axios";

export default {
    lastShot: (data) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/agencies/shot", data);
    },
    // getAllAgencyDataCommunity: () => {
    //     return axios.post("http://localhost:3001/api/agencies/getAllDataCommunity");
    // },

    getAllAgencyData: () => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/agencies/getAllData");
    },

    saveDataToInventory: (data) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/agencies/insertData", data);
    },

    checkUsersToken: (token) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/agencies/authorize", token);
    },

    registerClient: (newClient) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/users/client", newClient);
    },

    registerUser: (newUser) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/users/register", newUser);
    },

    loginUser: (user) => {
        return axios.post("https://afternoon-sierra-25981.herokuapp.com/api/users/login", user);
    }
}