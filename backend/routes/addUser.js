import { express } from "express"
import { bcrypt } from "bcrypt"
import { bodyParser } from "body-parser"
const user = require("../model/database.js")
const app = express.Router();

app.use(bodyParser.json());
app.post('/register', async (req, res) => {
  try {
    const {name, email, password} = req.body;
    if (await user.exists({ email: email})) {
      return res.json({ message: 'Email is already used'})
    }
    if (!email || !password || !name){
        return res.status(401).json({ mesage: 'Please fillout all information'});
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new user ({
      name: name,
      email: email,
      password: hashPassword
    })
    await newUser.save();
  } catch (error)
  {
    res.send(error);
  }
 
});
app.get('/', (req,res) => {
  res.send("user server")
})
export {app as addUser }