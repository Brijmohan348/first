import User from "../user.model.js";



const Login = async(req,res) =>{
  const {email,password} =req.body
  try {
  
    const user = await User.findOne({email}).select("-password");
  
    res.json({user});
} catch (error) {
    console.error("Error fetching users:", error);
    res.status(400).json({message: 'login error' });
}
}
export default Login