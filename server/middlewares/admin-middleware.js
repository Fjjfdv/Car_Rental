const adminMiddleware = async(req,res,next)=>{
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin; // authMiddleware ko request kar rhe user data ke liye --- login krne par jo user ka data milega usse check kerege isAdmin is value
    if(!adminRole){ // Agr false h to ...
        return res.status(404).json({message: "Access denied. user is not an admin"});
    }
    // res.status(200).json({msg:req.user.isAdmin});
    next(); // if user is an admin , proceed to the next middleware
  } catch (error) {
    next(error);
  }
};
module.exports = adminMiddleware;