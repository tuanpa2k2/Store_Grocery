const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "60s" }
  );

  return access_token;
};

const genneralRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );

  return refresh_token;
};

const refreshTokenService = async (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("token line 24:", token);
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERR",
            message: "The authemtication",
          });
        }

        const { payload } = user;
        const access_token = await genneralAccessToken({
          id: payload?.id,
          isAdmin: payload?.isAdmin,
        });

        resolve({
          status: "OK",
          message: "Get refresh-token user success...",
          access_token,
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
  refreshTokenService,
};
