const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin.controller');
const signupController = require('../controller/signup.controller');
const loginController = require('../controller/login.controller');
const committeController = require('../controller/committe.controller');
const inviteMemberController = require('../controller/invitemember.controller');

router.post('/startevent',adminController.startEvent);
router.post('/signup',signupController.signup);
router.post('/login',loginController.login);
router.post('/addcommitte',committeController.addcommitte);
router.get('/listcommitte',committeController.listCommitte);
router.delete('/deletecommitte/:id',committeController.deletecommitte);
router.post('/invitemember',inviteMemberController.inviteMember)
router.delete('/removemember',inviteMemberController.removeMember);

module.exports = router;



