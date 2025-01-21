import React, { useState } from 'react';
import './create-course.css';

function CreateCourse() {
    const [formData, setFormData] = useState({
        courseName: '',
        courseDescription: '',
        thumbnail: '',
        videoId: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const courseData = {
            name: formData.courseName,
            description: formData.courseDescription,
            thumbnail: formData.thumbnail,
            videoId: formData.videoId,
        };

        try {
            const response = await fetch('/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Course created successfully!');
                console.log('Created course:', result);
                setFormData({
                    courseName: '',
                    courseDescription: '',
                    thumbnail: '',
                    videoId: '',
                });
            } else {
                const error = await response.json();
                setMessage(error.message || 'Failed to create course');
            }
        } catch (error) {
            console.error('Error creating course:', error);
            setMessage('An error occurred while creating the course.');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Create Course</h1>
            {message && <p className="message">{message}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label">Tên khoá học:</label>
                    <input
                        type="text"
                        name="courseName"
                        className="input"
                        placeholder="Nhập tên khoá học"
                        value={formData.courseName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="label">Mô Tả Khoá Học:</label>
                    <textarea
                        name="courseDescription"
                        rows="4"
                        cols="50"
                        className="textarea"
                        placeholder="Nhập mô tả khoá học"
                        value={formData.courseDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="label">URL Ảnh Thumbnail:</label>
                    <input
                        type="text"
                        name="thumbnail"
                        className="input"
                        placeholder="Nhập URL ảnh thumbnail"
                        value={formData.thumbnail}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Video ID (Youtube):</label>
                    <input
                        type="text"
                        name="videoId"
                        className="input"
                        placeholder="Nhập Video ID (Youtube)"
                        value={formData.videoId}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <input
                        type="submit"
                        value="Submit"
                        className="button"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateCourse;
