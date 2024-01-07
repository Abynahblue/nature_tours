// eslint-disable-next-line import/no-unresolved
const User = require("../models/userModels");

exports.signup = async (req, res, next) => {
    try{
        const newUser = await User.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    }
    catch (err)
    {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}