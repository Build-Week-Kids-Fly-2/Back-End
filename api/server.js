// General Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Router Import
const authRouter = require('../auth/auth-router.js');

// Create server w epress
const server = express();

// server uses - helmet and parser and cors
server.use(helmet());
server.use(cors());
server.use(express.json());

// server use routers
server.use('/api/auth', authRouter);

module.exports = server;
