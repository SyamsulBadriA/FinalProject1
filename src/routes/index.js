const express = require("express");
const router = express.Router();
const UserControllers = require('../controllers/userControllers');
const ReflectionControllers = require('../controllers/reflectionControllers');
const authentication = require("../middlewares/authentication");
const { Router } = require("express");

router.post('/api/v1/users/register', UserControllers.register);

router.post('/api/v1/users/login', UserControllers.login);

router.use(authentication);

router.post('/api/v1/reflections', ReflectionControllers.createReflection);

router.get('/api/v1/reflections', ReflectionControllers.getReflection);

router.put('/api/v1/reflections/:id', ReflectionControllers.updateReflection);

router.delete('/api/v1/reflections/:id', ReflectionControllers.deleteReflection);

module.exports = router;