const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./jwtService");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;

    try {
      // Tìm user có email đã tông tại hay chưa
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "Email đã tồn tại!",
        });
      }

      // Tạo mã hóa cho mật khẩu
      const hash = bcrypt.hashSync(password, 10);

      // Tạo user
      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
      });
      if (createdUser) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;

    try {
      // Tìm user có email đã tông tại hay chưa
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        // nếu không tồn tại email trong db
        resolve({
          status: "OK",
          message: "Email không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      // Mã hóa lại mật khẩu
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "OK",
          message: "Email or Password is incorrect",
        });
      }

      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "OK",
        message: "Login success...",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {

    try {
      const checkUserId = await User.findOne({
        _id: id,
      });

      if (checkUserId === null) {
        resolve({
          status: "ERR",
          message: "Email (User) này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })

      resolve({
        status: "OK",
        message: "Update success...",
        data: updatedUser
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
      const checkUserId = await User.findOne({
        _id: id,
      });

      if (checkUserId === null) {
        resolve({
          status: "ERR",
          message: "Email (User) này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      await User.findByIdAndDelete(id)

      resolve({
        status: "OK",
        message: "Delete success...",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {

    try {
      const allUser = await User.find()

      resolve({
        status: "OK",
        message: "All user success...",
        data: allUser
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
      const user = await User.findOne({
        _id: id,
      });

      if (user === null) {
        resolve({
          status: "ERR",
          message: "Email (User) này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      resolve({
        status: "OK",
        message: "Get details user success...",
        data: user
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser, 
  deleteUser,
  getAllUser,
  getDetailsUser
};
