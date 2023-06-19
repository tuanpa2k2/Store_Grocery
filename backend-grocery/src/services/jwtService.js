const jwt = require('jsonwebtoken')

const genneralAccessToken = async (paload) => {
    const access_token = jwt.sign({
        paload
    }, 'access_token', {expiresIn: '1h'})

    return access_token;
}

const genneralRefreshToken = async (paload) => {
    const access_token = jwt.sign({
        paload
    }, 'refresh_token', {expiresIn: '365d'})

    return access_token;
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}