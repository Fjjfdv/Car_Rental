const User = require("../models/user-model")
const bcrypt = require("bcryptjs"); // # 11
// Home Logic
const home = (async (req, res) => {
    try {
        res.status(200)
            .send("Hello By controller ... by controller By Prerna");
    } catch (err) {
        console.log(err)
    }
})
const register = async (req, res) => {
    try {
        // res.status(200)
        // .json({message: req.body});

        // const data = req.body;
        // res.status(200).json({data});

        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: "email already exists" });
        }

        // Hash the Password  #11
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password: hash_password });

        // # 10
        //  await User.create({username,email,phone,password});
        // res.status(200).json({data});

        // console.log(req.body);
        // res.status(200).send({msg:req.body});

        // # 12
        res.status(200).json({
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("Page not Found");
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const user = await bcrypt.compare(password, userExist.password);   // user ne jo bhi password dala agr vo database ke password se match ho gya to successful login ho jayega 

        //  const user  = await userExist.compare(password);

        //    const user = bcrypt.compare(
        //     `${req.body.password}`,
        //     user.password
        //);

        if (user) {
            res.status(200).json({
                msg: "login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        res.status(500).json("error");
    }
};

// To send user data - user logic
const user = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData);
        res.status(200).json({ userData });
    } catch (error) {
        res.status(500).json("error");
    }
}
module.exports = { home, register, login, user };