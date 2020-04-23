const express = require('express');
const productController = require('../controllers/product.controller')
const baseController = require('./../controllers/base.controller')
const router = express.Router();

module.exports = () => {

    router.post("/login", async (req, res) => {
        try {
            const users = await baseController.loginUser(req.body);
            return res.status(200).json({
                data: users
            })
        } catch (error) {
            if (error.status) {
                return res.status(error.status).json({
                    message: error.message
                })
            }
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })

    router.post("/register", async (req, res) => {
        try {
            await baseController.registerUser(req.body);
            return res.status(200).json({
                message: "Signup successfull, please login"
            })
        } catch (error) {
            if (error.status) {
                return res.status(error.status).json({
                    message: error.message
                })
            }
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })

    router.post('/userData', async (req, res) => {
        try {
            const users = await baseController.getUserDataByUserEmail(req.body.email);
            return res.status(200).json({
                ...users
            })
        } catch (error) {
            if (error.status) {
                return res.status(error.status).json({
                    message: error.message
                })
            }
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })

    router.post("/addCart", async (req, res) => {
        try {
            const id = await productController.addUpdateProduct(req.body);
            return res.status(200).json({
                message: "added",
                id
            })
        } catch (error) {
            console.error("[addCart] Error : ", error);
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })

    router.post("/removeCart", async (req, res) => {
        try {
            const id = await productController.removeProductCart(req.body);
            return res.status(200).json({
                message: "remove",
                id
            })
        } catch (error) {
            console.error("[removeCart] Error : ", error);
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })

    router.get("/list", async (req, res) => {
        try {
            const users = await productController.getProductsList();
            return res.status(200).json({
                data: users
            })
        } catch (error) {
            console.error("[AddUpdateUser] Error : ", error);
            return res.status(420).json({
                message: "There was an error, Please try again"
            })
        }
    })
    return router;
}