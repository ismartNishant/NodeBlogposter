const express = require("express");
const router = express.Router();
const BlogContorller = require("../controllers/BlogController");

//blog routes
router.get("/create", BlogContorller.blog_create_get);

router.get("/", BlogContorller.blog_index);

router.post("/", BlogContorller.blog_create_post);

router.get("/:id", BlogContorller.blog_details);

router.delete("/:id", BlogContorller.blog_delete);

module.exports = router;