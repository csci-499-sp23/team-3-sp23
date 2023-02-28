import { express } from "express";
import { jwt } from "jsonwebtoken";
const router = express.Router();
const user = require("../model/database.js")
router.post('/login', (req, res) => {
    const {email, password} = req.body;
    const confirmEmail = user.findOne({ email });

    if (!confirmEmail){
        return res.status(401).json({ mesage: 'Invalid email or password'});
    }
    
    
    console.log(req.body);
    res.json({ message: req.body});
})

module.exports = router;