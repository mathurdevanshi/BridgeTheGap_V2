import axios from "axios";

export default {
    saveDataToInventory: (data) => {
        // return new Promise((resolve)=>{
        //     resolve(data)
        // })
        //console.log(data);

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