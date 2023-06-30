const UserService = require("../services/UserService");
const JwtService = require("../services/jwtService");

const createUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const ischeckEmail = regex.test(email);

    if (!email) {
      return res.status(200).json({
        status: "Error-empty-email",
        message: "Không được để trống email!",
      });
    } else if (!password) {
      return res.status(200).json({
        status: "Error-empty-password",
        message: "Không được để trống password!",
      });
    } else if (!confirmPassword) {
      return res.status(200).json({
        status: "Error-empty-confirmPassword",
        message: "Không được để trống confirmPassword!",
      });
    } else if (!ischeckEmail) {
      return res.status(200).json({
        status: "Error-email",
        message: "Wrong email format",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "Error-confirmPassword",
        message: "Password is equal confirm password",
      });
    }

    const respononse = await UserService.createUser(req.body);

    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const ischeckEmail = regex.test(email);

    if (!email) {
      return res.status(200).json({
        status: "Error-empty-email",
        message: "Không được để trống email!",
      });
    } else if (!password) {
      return res.status(200).json({
        status: "Error-empty-password",
        message: "Không được để trống password!",
      });
    } else if (!ischeckEmail) {
      return res.status(200).json({
        status: "Error-email",
        message: "Email không đúng định dạng!",
      });
    }

    const respononse = await UserService.loginUser(req.body);
    const { refresh_token, ...newResponse } = respononse;

    res.cookie("refresh_token", refresh_token, {
      HttpOnly: true,
      Secure: true, // bảo mật phía client
    });

    return res.status(200).json(newResponse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required...",
      });
    }

    const respononse = await UserService.updateUser(userId, data);

    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required...",
      });
    }

    const respononse = await UserService.deleteUser(userId);

    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const respononse = await UserService.getAllUser();

    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required...",
      });
    }

    const respononse = await UserService.getDetailsUser(userId);
    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refresh_token;

    if (!token) {
      return res.status(200).json({
        status: "ERR",
        message: "The token is required!",
      });
    }

    const respononse = await JwtService.refreshTokenService(token);
    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  refreshToken,
};
