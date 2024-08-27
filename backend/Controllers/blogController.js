// controllers/blogController.js
const Blog = require('../Models/blogModel');
const path = require('path');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new Blog({ title, category, content, image });
    await newBlog.save();

    res.status(201).send('Blog created');
  } catch (error) {
    res.status(500).send('Error creating blog');
  }
};

// Serve images
exports.serveImage = (req, res) => {
  res.sendFile(path.join(__dirname, '../uploads', req.params.filename));
};
