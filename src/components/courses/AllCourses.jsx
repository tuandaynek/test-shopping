import React, { useState, useEffect, useCallback } from 'react'
import './all-courses.css'
import CourseCard from './CourseCard.jsx'

const Courses = () =>{
    const [courses, setCourses] = useState([])

    const fetchCourses = useCallback(async() => {
        try{
            const response = await fetch('/api/courses')
            const data = await response.json()
            if(Array.isArray(data)){
                setCourses(data)
            } else if(data.courses && Array.isArray(data.courses)){
                setCourses(data.courses)
            } else {
                console.error('Invalid data format:', data)
                setCourses([])
            }
        } catch(error){
            console.error('Error fetching courses:', error)
            setCourses([])
        }
    }, [])

    useEffect(() => {
        fetchCourses()
    }, [fetchCourses])

    return(
        <>
            <div className='course-container'>
                {Array.isArray(courses) && courses.length > 0 ? (
                    courses.map(course => (
                        <CourseCard key={course.slug} course={course} />
                    ))
                ) : (
                    <p>No courses available at the moment.</p>
                )}
            </div>

        </>
    )
}

export default React.memo(Courses)