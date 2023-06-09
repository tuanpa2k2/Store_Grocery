const Product = require("../models/ProductModel");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;

    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: "ERR",
          message: "Tên của sản phẩm đã tồn tại, vui lòng kiểm tra lại!",
        });
      }

      const createdProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (createdProduct) {
        resolve({
          status: "Success",
          message: "Thêm sản phẩm thành công.",
          data: createdProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProductId = await Product.findOne({
        _id: id,
      });

      if (checkProductId === null) {
        resolve({
          status: "ERR",
          message: "Product này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      const updatedProduct = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        status: "OK",
        message: "Update product success...",
        data: updatedProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({
        _id: id,
      });

      if (product === null) {
        resolve({
          status: "ERR",
          message: "Product này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      resolve({
        status: "OK",
        message: "Get details product success...",
        data: product,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProductId = await Product.findOne({
        _id: id,
      });

      if (checkProductId === null) {
        resolve({
          status: "ERR",
          message: "Product này không tồn tại! Vui lòng kiểm tra lại.",
        });
      }

      await Product.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete product success...",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalProduct = await Product.count();

      if (filter) {
        const label = filter[0];

        const allProductSort = await Product.find({
          [label]: { $regex: filter[1] },
        })
          .limit(limit) // .limit(4) : lấy ra 4 sản phẩm đầu tiên
          .skip(page * limit); // .skip(3) : nó sẽ bỏ qua 3 sản phẩm đầu tiên và lấy từ sản phẩm thứ 4 cho đến hết

        resolve({
          status: "OK",
          message: "Get filter all product success...",
          data: allProductSort,
          totalProduct: totalProduct,
          totalPage: Math.ceil(totalProduct / limit),
          pageCurrent: Number(page + 1),
        });
      }

      if (sort) {
        const objectSort = {};
        objectSort[sort[1]] = sort[0];

        const allProductSort = await Product.find()
          .limit(limit)
          .skip(page * limit)
          .sort(objectSort);

        resolve({
          status: "OK",
          message: "Get sort all product success...",
          data: allProductSort,
          totalProduct: totalProduct,
          totalPage: Math.ceil(totalProduct / limit),
          pageCurrent: Number(page + 1),
        });
      }

      const allProduct = await Product.find()
        .limit(limit) // .limit(4) : lấy ra 4 sản phẩm đầu tiên
        .skip(page * limit); // .skip(3) : nó sẽ bỏ qua 3 sản phẩm đầu tiên và lấy từ sản phẩm thứ 4 cho đến hết

      resolve({
        status: "OK",
        message: "Get all product success...",
        data: allProduct,
        totalProduct: totalProduct,
        totalPage: Math.ceil(totalProduct / limit),
        pageCurrent: Number(page + 1),
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProduct,
};
