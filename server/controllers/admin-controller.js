const User = require("../models/user-model");
const Contact = require('../models/contact-model');

// *---------------- To get All the users Present in database
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }) // users me Usernatlas me jo bhi data h vo aa jata h 
        console.log(users);
        if (!users || users.length === 0) { // if user don't exist 
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id; // url se jo data bhej rhe h usko get krne kea  liye params ka use kiya (url se id get kr rhe h)
        await User.deleteOne({ _id: id }); // jo id url se milege usko hum compare karege mongodb wali id se jisse match keregi usko delete kr dege
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error); // error-middleware ko data pss ho jata h error wala 
    }
}

// Logic to get single user data 
const getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 }); // password:0 taki password chhod ke sab  mile
        return res.status(200).json(data);
    } catch (error) {
        next(error); // error-middleware ko data pss ho jata h error wala 
    }
}

// *---------------- To get All the contacts Present in database
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({}, { password: 0 }) // users me Usernatlas me jo bhi data h vo aa jata h 
        console.log(contacts);
        if (!contacts || contacts.length === 0) { // if user don't exist 
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact Delete successfully" })
    } catch (error) {
        next(error);
    }
}

// logic to update user
const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body; // jo bhi data hum data kr rhe h usko backend me get krne ke liye 

        const updatedData = await User.updateOne({ _id: id }, {
            $set: updatedUserData,
        }
        ); // ({filter}, {$})
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAllContacts, getAllUsers, deleteUserById, getUserByID, updateUserById, deleteContactById }






