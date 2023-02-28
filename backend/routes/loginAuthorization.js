import { express } from "express";
import { jwt } from "jsonwebtoken";
import { bcrypt } from "bcrypt"
const router = express.Router();
const user = require("../model/database.js")
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const confirmEmail = await user.findOne({ email });
    const matchPassword = await bcrypt.compare(password, user.password)
    if (!confirmEmail || !matchPassword){
        return res.status(401).json({ mesage: 'Invalid email or password'});
    }
    //Add a jwt token here
})
app.get('/', (req,res) => {
    res.send("login server")
  })
export {router as userLogin }