import React from 'react';

export const getAchievements = () =>
    <ul>
        {Achievements.map((achievement, index) => <li key={index}> {achievement}</li>)}
    </ul>;


const Achievements = [
    "Received MVP and other awards at SAP",
    "Out of 17200 students, reached the semi-finals of TCS InfraMind Season 2",
    "Awarded for Excellent Performance in 2018 by SRM Institute of Science and Technology",
    "Global Rank 411 in Google Kickstart Round E 2018"
]

