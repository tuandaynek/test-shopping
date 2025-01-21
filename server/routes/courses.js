const express = require('express')
const router = express.Router()
const Course = require('../models/Course.js')

// Lấy tất cả khoá học
router.get('/', async (req, res) => {
    try {
      const products = await Course.find().populate('name');
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server' });
    }
});

router.post('/', async (req, res) => {
  try {
      console.log('Received request body:', req.body);

      const { name, description, thumbnail, videoId, slug } = req.body;

      // Check if thumbnail is provided, otherwise generate it based on videoId
      const courseThumbnail = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg` : '');

      console.log('Request body:', req.body);
      console.log('Processed thumbnail URL:', courseThumbnail);


      // Validate the required fields
      if (!name || !description || !videoId) {
          return res.status(400).json({ message: 'Name, description, and videoId are required.' });
      }

      // Create a new course instance
      const course = new Course({
          name,
          description,
          thumbnail: courseThumbnail,
          videoId,
          slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
      });

      // Save the course to the database
      await course.save();
      res.status(201).json(course); // Return the newly created course
  } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router