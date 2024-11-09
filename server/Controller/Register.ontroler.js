
import freshtoken from "../auth/jwt.js"
import User from "../user.model.js"
import bcrypt from 'bcrypt'
const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) {
            return res.send("plz enter your name")
        }
        if (!email) {
            return res.send("plz enter your email")
        }
        if (!password) {
            return res.send("plz enter your password")
        }

        const userexist = await User.findOne({ email })

        if (userexist) {
            return res.send("User already created ")
        }
        const hashpassword = await bcrypt.hash(password, 15)

        const user = new User({ name, email, password: hashpassword })
        await user.save()
        
         freshtoken(user._id,res)
        console.log("user register successfully",user._id)
        return res.status(201).json({ message: "user register successfully" })

    } catch (error) {
        return res.status(400).json({ message: "register server error" })
    }
}
export default Register

