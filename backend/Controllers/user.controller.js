import User from "../Models/user.model.js";

export const getUsers = async (req,res) =>{
try {
    const loggenInUserId = req.user._id;

    const filteredUsers = await User.find({_id:{ $ne:loggenInUserId }}).select('-password');
    res.status(200).json(filteredUsers);

} catch (error) {
    console.log("Error while trying to get users",error.message);
    res.status(500).json({error:"Internal Server Error"});
}
}