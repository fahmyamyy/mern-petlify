import express from 'express';
import { getUsers, signIn, signUp, getUserById, editUser, deleteUser } from '../controller/user-controller.js';
import { getPets, addPet, getPetById, editPet, deletePet } from '../controller/pet-controller.js';
import { getLoveds, addLoved, getLovedById, deleteLoved } from '../controller/loved-controller.js';

const router = express.Router();

// User Router
router.get('/users', getUsers);
router.post('/users/', signIn);
router.post('/users/signup', signUp);
router.get('/users/:username', getUserById);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

// Pet Router
router.get('/pets', getPets);
router.post('/pets/addPet', addPet);
router.get('/pets/:id', getPetById);
router.put('/pets/:id', editPet);
router.delete('/pets/:id', deletePet);

// Loved Router
router.get('/loveds/:lovedBy', getLoveds);
router.post('/loveds/addLoved', addLoved);
router.get('/loveds/:lovedBy', getLovedById);
// router.put('/loveds/:id', editLoved);
router.delete('/loveds/:id', deleteLoved);

export default router;