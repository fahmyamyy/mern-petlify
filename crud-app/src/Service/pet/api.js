import axios from 'axios';

const url = 'http://localhost:8080';

export const getPets = async (id) => {
    id = id || '';
    try {
        let response = await axios.get(`${url}/pets/${id}`);
        return response;
    } catch (error) {
        console.log('Error while calling getPets API ', error)
    }
}

export const addPet = async (pet) => {
    try {
        return await axios.post(`${url}/pets/addPet`, pet);
    } catch(error) {
        console.log('Error while calling addPet API ', error);
        return error;
    } 
}

export const lovedPet = async (pet) => {
    console.log(pet)
    try {
        return await axios.post(`${url}/loveds/addLoved/`, pet);
    } catch(error) {
        console.log('Error while calling lovedPet API ', error)
    } 
}

export const deleteLoved = async (id) => {
    try {
        return await axios.delete(`${url}/loveds/${id}`);
    } catch(error) {
        console.log('Error while calling deletePet API ', error)
    } 
}

// not used yet
export const deletePet = async (id) => {
    try {
        return await axios.delete(`${url}/pets/${id}`);
    } catch(error) {
        console.log('Error while calling deletePet API ', error)
    } 
}

export const editPet = async (id, pet) => {
    try {
        return await axios.put(`${url}/pets/${id}`, pet)
        
    } catch(error) {
        console.log('Error while calling editPet API ', error)
    }
}

