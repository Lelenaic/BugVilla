const router = require("express").Router();
const verify = require('../middleware/verify')
const UserController = require('../controllers/UserController');

router.get('/me', verify, UserController.getCurrent);
router.post('/signup', UserController.signup);
router.post("/login", UserController.login);
router.get('/:username', UserController.getByUsername);
router.get('/:username/comments', UserController.getCommentsByUser);
router.get('/:username/bugs', UserController.getBugsByUser);

module.exports = router;