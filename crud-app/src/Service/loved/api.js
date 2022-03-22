import axios from 'axios';

const url = 'http://localhost:8080';

// var response = {
//     response_code : "",
//     response_time : "",
//     response_message : "",
//     data : [] 
// }

export const lovedPet = async (pet) => {
    try {
        return await axios.post(`${url}/loveds/addLoved/`, pet);
    } catch(error) {
        console.log('Error while calling lovedPet API ', error)
    } 
}

export const getLoveds = async (username) => {
    // console.log(username);
    try {
        let response = await axios.get(`${url}/loveds/${username}`);
        return response;
    } catch (error) {
        console.log('Error while calling getLoveds API ', error)
    }
}

export const addUser = async (user) => {
    try {
        return await axios.post(`${url}/users/addUser`, user);
    } catch(error) {
        console.log('Error while calling addUser API ', error)
    } 
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${url}/users/${id}`);
    } catch(error) {
        console.log('Error while calling deleteUser API ', error)
    } 
}

export const editUser = async (id, user) => {
    try {
        return await axios.put(`${url}/users/${id}`, user)
        
    } catch(error) {
        console.log('Error while calling editUser API ', error)
    }
}

