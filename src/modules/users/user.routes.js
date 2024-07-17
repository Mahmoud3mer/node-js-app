import express from 'express';
import { signUp , signIn , verifyAccount } from './user.controller.js';
import { checkEmail } from '../../middleware/checkEmail.js';

const userRoutes = express.Router();

// userRoutes.get('/user',getAllUsers);
// userRoutes.post('/user',addUser);
// userRoutes.put('/user/:id',updateUser);
// userRoutes.delete('/user/:id',deleteUser);

// API Sign Up

userRoutes.post('/signUp',  checkEmail ,signUp);
userRoutes.post('/signIn' ,signIn);


userRoutes.post('/verify' ,verifyAccount);



export default userRoutes;
