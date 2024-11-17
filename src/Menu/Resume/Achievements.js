import React from 'react';

export const getAchievements = () =>
    <ul>
        {Achievements.map((achievement, index) => <li key={index}> {achievement}</li>)}
    </ul>;


const Achievements = [
    "Received MVP and other awards at SAP",
    "Awarded for Excellent Performance in 2018 by SRM Institute of Science and Technology",
    "Global Rank 411 in Google Kickstart Round E 2018"
]

