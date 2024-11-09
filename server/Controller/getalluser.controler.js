import User from '../user.model.js';

const getalluser = async (req, res ) => {
    try {
        // Fetch all users except the one with the specified _id
        const user = await User.find();
        // console.log(loginid)
        // Send JSON response with users
        res.json({ user });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(400).json({message: 'getalluser error' });
    }
}

export default getalluser;
