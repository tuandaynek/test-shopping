const mongoose = require('mongoose');
const slugTemplate = require('mongoose-slug-generator');

mongoose.plugin(slugTemplate); // Register the plugin with Mongoose.

const Schema = mongoose.Schema;

// Define the schema for the Course model
const Course = new Schema({
    name: { type: String, default: 'TuanCodeNNLT Courses' },
    description: { type: String, default: 'TuanCodeNNLT Courses description', maxLength: 600 },
    thumbnail: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name'}, // Add unique: true
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
