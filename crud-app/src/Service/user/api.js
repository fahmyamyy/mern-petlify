import axios from 'axios';

const url = 'http://localhost:8080';
// var response = {
//     response_code : "",
//     response_time : "",
//     response_message : "",
//     data : [] 
// }

export const getUsers = async (username) => {
    username = username || '';
    
    try {
        let response = await axios.get(`${url}/users/${username}`);
        return response;
    } catch (error) {
        console.log('Error while calling getUsers API ', error)
    }
}

export const signIn = async (user) => {

    try {
        let response = await axios.post(`${url}/users/`, user);
        return response;
    } catch (error) {
        console.log('Error while calling signIn API ', error)
        return error;
    }
}

export const signUp = async (user) => {
    try {
        let response = await axios.post(`${url}/users/signUp`, user);
        return response;
    } catch(error) {
        console.log('Error while calling signUp API ', error);
        return error;
    } 
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${url}/users/${id}`);
    } catch(error) {
        console.log('Error while calling deleteUser API ', error)
    } 
}

export const editUser = async (user) => {
    try {
        return await axios.put(`${url}/users/${user._id}`, user)
    } catch(error) {
        console.log('Error while calling editUser API ', error)
        return error
    }
}