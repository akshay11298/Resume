import React from 'react';

export const getSkills = () =>
    <ul>
        {skills.map((item, index) => (
            <div>
                <li key={index}>{item.category}</li>
                <ul>
                    {item.skills.map((skill, index) =>
                        <li key={index}>{skill}</li>
                    )}
                </ul>
            </div>
        ))}
    </ul>;

const skills = [
    {
        category: "Programming Languages",
        skills: [
            "Java", "JavaScript", "TypeScript", "Python", "SQL", "R"
        ]
    }, {
        category: "Frameworks and Libraries",
        skills: [
            "SAP Fiori", "SAP CAPM", "Spring Boot", "MERN Stack (MongoDB, Express, React, Node.js)", "Kafka", "Drools++", "GraphQL", "Redux", "React Native"
        ]
    }, {
        category: "Data Management and Databases",
        skills: [
            "SAP HANA Cloud", "DB2", "MongoDB", "Elasticsearch", "Embarcadero ER/Studio"
        ]
    }, {
        category: "Cloud and DevOps Platforms",
        skills: [
            "SAP BTP", "Cloud Foundry", "Jenkins", "GitHub Actions", "Heroku"
        ]
    }, {
        category: "Tools and Quality Frameworks",
        skills: [
            "Git", "Jira", "SonarQube", "Fortify", "Whitesource", "JMeter", "Jest", "JUnit", "PowerMockito", "Spring Contract"
        ]
    }, {
        category: "Machine Learning and AI",
        skills: [
            "Large Language Models (LLM)", "Retrieval-Augmented Generation (RAG)", "Sentiment Analysis", "Web scraping", "Clustering", "Classification"
        ]
    }, {
        category: "Analytics and Visualization",
        skills: [
            "Tableau", "Time Series Analysis", "Categorical Analysis", "Regression Analysis"
        ]
    }
];