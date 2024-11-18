import React from 'react';

export const getEducationInfo = () => EducationalInfo.map((info, index) =>
    <div>
        <strong>{info.institute}</strong>, {info.location}
        <br/>
        <em>{info.duration.start} - {info.duration.end}</em> <br/>
        <em>{info.course}</em> <br/>
        <em>{info.specialization}</em>{info.major && <em>&nbsp; - Major: ({info.major})</em>} <br/>
        <b>Result: </b> {info.result} <br/>
        <hr/>
        {info.learnings}
        {index !== EducationalInfo.length - 1 && <hr style={{borderWidth: '3px'}}/>}
    </div>
);

const EducationalInfo = [{
    institute: "Indian Institute of Management Ahmedabad",
    location: "India",
    course: "Post Graduate Diploma",
    specialization: "Advanced Business Analytics",
    major: "Marketing Analytics and Strategy Analytics",
    duration: {
        start: "March 2023", end: "September 2024"
    },
    result: "Awaited",
    learnings: "Developed strategic insights and technical skills to bridge the gap between technology and business management. Gained expertise in applying analytical tools (TimeSeries, Categorical, Regression Analysis, Machine Learning, AI, Neural Network) to enhance marketing strategies and operational efficiencies"
}, {
    institute: "SRM Institute of Science and Technology",
    location: "India",
    course: "Bachelor of Technology",
    specialization: "Computer Science and Engineering",
    duration: {
        start: "March 2023", end: "September 2024"
    },
    result: "87.82%",
    learnings: "Gained technical skills and insight into how systems should work. Worked on numerous projects, ranging from Cross platform app development, web development, data analytics etc"
}]