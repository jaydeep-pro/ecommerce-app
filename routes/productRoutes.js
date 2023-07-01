import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
//router
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//get single product by slug
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get('/product-count' , productCountController)

//product per page
router.get('/product-list/:page' , productListController)

//search product
router.get('/search/:keyword' , searchProductController);

//similar product
router.get('/related-product/:pid/:cid' , relatedProductController)

//category wise product
router.get("/product-category/:slug" , productCategoryController)

//payments routes
//token
router.get("/braintree/token" , braintreeTokenController )

//payments
router.post('/braintree/payment' , requireSignIn , brainTreePaymentController)

export default router;