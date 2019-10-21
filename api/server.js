// General Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Router Import
const userRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

// Create server w epress
const server = express();

// server uses - helmet and parser and cors
server.use(helmet());
server.use(express.json());
server.use(cors());

// server use routers
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

module.exports = server;
