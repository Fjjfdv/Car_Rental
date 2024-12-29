const jwt = require("jsonwebtoken");
const User = require("../models/user-model")

const authMiddleware = async (req, res, next) => {
  // middleware me ek extra parameter pass krte h that is next
  const token = req.header("Authorization");
  if (!token) {
    // If you attempt to use an expired token, you'll receive a "401 unauthorized HTTP" response.
    return res
      .status(401).json({ message: "Unauthorized HTTP, token is not provided" });
  }
  //Assuming token is in the format "Bearer <jwtToken>, Removing the "bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token from auth middleware", jwtToken);

  try {
    const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY) // jwtToken ko JWT_SECRET_KEY se compare krte h agr vo match ho jata h to console me uska data show krte h
    console.log(isverified);

    const userData = await User.findOne({ email: isverified.email }).
      select({
        password: 0, // password wali field chhod ke sari field mil jayegi
      });
    console.log(userData);

    // Custom properties
    req.user = userData;  // complete user ka data except password
    req.token = token;
    req.userID = userData._id

    next(); // next krne ka mtlb authorization ke baad user wale component pe jayega
  } catch (error) {
    return res.status(401).json({ message: "unauthorization Invalid token" })
  }
}
module.exports = authMiddleware;