import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CourseCard = ({course}) => {
    


    return(
        <>
            <Link to={`/courses/${course.slug}`} className='course-card'>
                <img className='course-image' src={course.thumbnail} alt={course.name} />
                <h2 className='course-name'>{course.name}</h2>
                <p className='courses-description'>{course.description}</p>
                <button className='course-button'>Buy Now</button>
            </Link>
        </>
    )
}

export default React.memo(CourseCard)