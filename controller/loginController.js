const userModel = require('../models/userModel')
const data=require('../data/data')

const loginController = async (request, response) => {
    const movies = await userModel.find()
    if (movies.length === 0) {
        await userModel.insertMany(data)
    }
    const user_email = request.body.email
    const user_details = await userModel.findOne({ EmailId: user_email })
    console.log(user_details)
    return response.status(200).json({ role: user_details.Role})
}
module.exports = { loginController }