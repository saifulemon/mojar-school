import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookReader, faUser, faStar } from "@fortawesome/free-solid-svg-icons";

const CourseCard = (props) => {
    const { imgUrl, title, lesson, students, rating } = props.item;

    return (
        <div className="single-course-item">
            <div className="course-img">
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="course-details">
                <h6 className="course-title mb-4">{title}</h6>

                <div className=" d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                        <FontAwesomeIcon icon={faBookReader} /> {lesson} Lessons
                    </p>

                    <p className="students d-flex align-items-center gap-1">
                        <FontAwesomeIcon icon={faUser} /> {students}K
                    </p>
                </div>

                <div className=" d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                        <FontAwesomeIcon icon={faStar} /> {rating}K
                    </p>

                    <p className="enroll d-flex align-items-center gap-1">
                        <a href="#enroll"> Enroll Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
