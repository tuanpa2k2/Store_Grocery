const UserService = require("../services/UserService");

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const ischeckEmail = regex.test(email);

    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "The imput is required",
      });
    } else if (!ischeckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "Wrong email format",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirm password",
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
    const { name, email, password, confirmPassword, phone } = req.body;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const ischeckEmail = regex.test(email);

    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "Đầu vào không được để trống!",
      });
    } else if (!ischeckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "Sai định dang email!",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "Mật khẩu không khớp!",
      });
    }

    const respononse = await UserService.loginUser(req.body);

    return res.status(200).json(respononse);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
    try {
      const userId = req.params.id
      const data = req.body

      if(!userId) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The userId is required...'
        })
      }

      const respononse = await UserService.updateUser(userId, data);
  
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
  updateUser
};
