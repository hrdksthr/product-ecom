const dbHelper = require('../helpers/db.helper');
class ProductsController {
    getProductsList() {
        return new Promise(async (resolve, reject) => {
            try {
                const products = await dbHelper.getDbData("products", {});
                return resolve(products)
            } catch (error) {
                console.error("[getProductsList] Error : ", error)
                return reject(error);
            }
        })
    }

    addUpdateProduct(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const mainProduct = await dbHelper.getDbData("products", {
                    id: data.id
                });
                if (mainProduct && mainProduct.length) {
                    const products = await dbHelper.getDbData("users-products", {
                        email: data.email.trim().toLowerCase(),
                        id: data.id
                    });
                    if (products && products.length) {
                        products[0].count = Number(products[0].count) + 1;
                        products[0].price = Number(Number(products[0].price).toFixed(2)) + Number(Number(mainProduct[0].price).toFixed(2));
                        await dbHelper.updateDbData("users-products", products[0]._id, products[0]);
                        return resolve(data.id)
                    }
                    mainProduct[0].count = 1;
                    mainProduct[0].email = data.email.trim().toLowerCase();
                    await dbHelper.inserDbData("users-products", mainProduct[0]);
                    return resolve(data.id)
                }
                return reject({
                    status: 420,
                    message: "Product not found"
                })

            } catch (error) {
                console.error("[getUsersList] Error : ", error)
                return reject(error);
            }
        })
    }

    removeProductCart(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const mainProduct = await dbHelper.getDbData("products", {
                    id: data.id
                });
                if (mainProduct && mainProduct.length) {
                    const products = await dbHelper.getDbData("users-products", {
                        email: data.email.trim().toLowerCase(),
                        id: data.id
                    });
                    if (products && products.length) {
                        products[0].count = Number(products[0].count) - 1;
                        products[0].price = Number(Number(products[0].price).toFixed(2)) + Number(Number(mainProduct[0].price).toFixed(2));
                        await dbHelper.updateDbData("users-products", products[0]._id, products[0]);
                        if (!products[0].count) {
                            await dbHelper.removeDbData("users-products", products[0]._id, products[0]);
                        }
                        return resolve(data.id)
                    }
                }
                
                return reject({
                    status: 420,
                    message: "No Product Found in cart"
                })
            } catch (error) {
                console.error("[getUsersList] Error : ", error)
                return reject(error);
            }
        })
    }

}

module.exports = new ProductsController();