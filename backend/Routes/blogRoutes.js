// routes/blogRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const blogController = require('../Controllers/blogController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route for creating a blog
router.post('/api/blogs', upload.single('image'), blogController.createBlog);

// Route for serving images
router.get('/uploads/:filename', blogController.serveImage);

module.exports = router;
