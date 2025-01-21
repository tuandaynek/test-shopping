import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
    const { slug: courseSlug } = useParams();
    const [allCourses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchCourses = useCallback(async () => {
        try {
            const response = await fetch('/api/courses');
            const data = await response.json();
            if (Array.isArray(data)) {
                setCourses(data);
            } else if (data.courses && Array.isArray(data.courses)) {
                setCourses(data.courses);
            } else {
                console.error('Invalid data format:', data);
                setCourses([]);
                setError('Invalid data format');
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError('Failed to fetch courses');
            setCourses([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);


    const course = allCourses.find(c => c.slug === courseSlug);

    // /* Log Test::
    console.log('All courses:', allCourses);
    console.log('Course slug:', courseSlug);

    if (!allCourses || allCourses.length === 0) {
        return <p>Loading courses...</p>;
    }
    
    console.log('Course link:', `/courses/${course.slug}`);

    // */

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!course) {
        return (
            <div className="not-found">
                <h2>Course not found</h2>
                <h2>{courseSlug}</h2>
                <button onClick={() => navigate('/courses')}>Back to Courses</button>
            </div>
        );
    }

    const courseVideo = course.videoId
        ? `https://www.youtube.com/embed/${course.videoId}`
        : null;

    return (
        <div className="container">
            <div className="show">
                <div className="sidebar">
                    <button>Learn now</button>
                </div>
                <div className="information">
                    <h2>{course.name}</h2>
                    {courseVideo ? (
                        <iframe
                            width="560"
                            height="315"
                            title="YouTube video player"
                            src={courseVideo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No video available for this course.</p>
                    )}
                    <p>{course.description}</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CourseDetail);
