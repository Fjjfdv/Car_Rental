const Data = require('../models/data-models');
const data = async (req, res) => {
    try {
        const response = req.body;
        await Data.create(response);
        return res.status(200).json({ message: "Data store successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Data not stored" });
    }
};
module.exports = data;
