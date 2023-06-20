const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const genneralAccessToken = async (paload) => {
    const access_token = jwt.sign({
        paload
    }, process.env.ACCESS_TOKEN, {expiresIn: '1h'})

    return access_token;
}

const genneralRefreshToken = async (paload) => {
    const refresh_token = jwt.sign({
        paload
    }, process.env.REFRESH_TOKEN, {expiresIn: '365d'})

    return refresh_token;
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}