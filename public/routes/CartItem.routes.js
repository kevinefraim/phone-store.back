"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartItem_controller_1 = require("../controllers/cartItem.controller");
const revToken_1 = require("../middlewares/revToken");
const router = (0, express_1.Router)();
router.use(revToken_1.revToken);
router.get("/", cartItem_controller_1.getItems);
router.get("/:id", cartItem_controller_1.getItemById);
router.post("/create", cartItem_controller_1.createItem);
router.put("/update/:id", cartItem_controller_1.updateItemById);
router.delete("/delete/:id", cartItem_controller_1.deleteItemById);
exports.default = router;
