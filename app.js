// express to create server
import express from 'express';
// mongoose to create db
import mongoose from "mongoose";

import { dbConnection } from './database/dbConnection.js';
import userModel from './database/model/user.model.js';
import userRoutes from './src/modules/users/user.routes.js';
import noteRoutes from './src/modules/notes/note.routes.js';
// DB
// coneect db
dbConnection;
// create schema
// create model


// Server
const app = express();
// middleWare
app.use(express.json());

// user routes
app.use(userRoutes)
// note routes
app.use(noteRoutes)

// hhhhhhhhhhhhhhhhhhhhhhh
// add port
app.listen(3000);