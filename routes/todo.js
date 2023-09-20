"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let arr = [];
router.get("/", (req, res, next) => {
    console.log(arr);
    res.status(200).json({ todos: arr });
});
router.post("/post", (req, res, next) => {
    arr.push({
        id: Math.floor(Math.random() * 100).toString(),
        text: req.body.text,
    });
    console.log(req.body);
    res.json({ todos: arr });
});
router.delete("/delete", (req, res, next) => {
    let isPresent = false;
    const newArr = [];
    const id = req.body.id;
    arr.forEach((ele) => {
        if (ele.id !== id) {
            newArr.push(ele);
        }
        else {
            isPresent = true;
        }
    });
    arr = newArr;
    console.log(newArr);
    if (isPresent) {
        res.status(200).json({ status: "deleted" });
    }
    else {
        res.status(404).json({ status: "not found" });
    }
});
router.patch("/update", (req, res, next) => {
    let id = req.body.id;
    let isPresent = false;
    arr.forEach((ele) => {
        if (ele.id === id) {
            isPresent = true;
            ele.text = req.body.text;
        }
    });
    if (isPresent) {
        res.status(200).json({ status: "done" });
    }
    else {
        res.status(404).json({ status: "its an error" });
    }
});
exports.default = router;
