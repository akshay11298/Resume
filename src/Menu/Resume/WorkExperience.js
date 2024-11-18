import React from 'react';

export const getWorkExperience = experience => workExperience.map((item, index) => (
    <div key={index}>
        <strong>{item.title}</strong>
        <br/>
        <em>{item.period.start} - {item.period.end}</em> <br/>
        <em>{item.organisation}</em> <br/>
        <hr/>
        {item.content}
        {index !== workExperience.length - 1 && <hr style={{borderWidth: '3px'}}/>}
    </div>
))

const workExperience = [
    {
        title: "Developer",
        period: {
            start: "April 2021",
            end: "Till Present"
        },
        organisation: "SAP Labs (Product - Sustainability Footprint Management)",
        content: <div>
            I work as a full stack developer for the Sustainability suite in SAP. I got to explore multiple SAP
            frameworks and tools used. This has expanded my knowledge and possibilities within an organisation. I also
            got the opportunity to explore Product Management and Business AI here. My role included :
            <ul>
                <li>
                    Designed and developed full-stack applications aligned with customer requirements, using Agile
                    methodologies to ensure iterative delivery and quality
                </li>
                <li>
                    Deployed microservices on Cloud Foundry using vector-based DwC techniques with Jenkins. Accelerated
                    production delivery, reducing lead time by 84% (from 3 hours to 30 minutes)
                </li>
                <li>
                    Configured static code and security checks for quality control, along with WebDriver tests for UI
                    validation
                </li>
                <li>
                    Managed a team of 2-3 developers to deliver critical features on schedule
                </li>
                <li>
                    Extended my responsibilities to DevOps (Jenkins as a Service, GitHub action) tasks and Analytics
                    dashboard creation. Reduced repository pipeline deployment lead time from 75 mins to 30 mins,
                    increasing development efficiency
                </li>
                <li>Developed a Similarity Search Engine in our product using LLM and a QA chatbot using RAG (AI)</li>
            </ul></div>
    }, {
        title: "Systems Engineer",
        period: {
            start: "June 2019",
            end: "April 2021"
        },
        organisation: "Tata Consultancy Services (Project - Unemployment Insurance of Connecticut)",
        content: <div>
            I worked on Unemployment Insurance project for Connecticut Department of Labor. Technologies used are
            Java 8, DB2 Database, JSF, Hibernate. I am part of the Benefits team, i.e., I develop claimants' side of
            application. My role in this project is of a Java Developer and my responsibilities are:
            <ul>
                <li> Developed the web application as a backend and database engineer, impacting ~2,20,000 users</li>
                <li> Improved the UI, as an additional responsibility, to improve client engagement by up to 50%</li>
                <li> Role includes Java development, testing and data modelling through Embarcadero ER/Studio</li>
            </ul>
        </div>
    }, {
        title: "Front End Developer Intern",
        period: {
            start: "January 2019",
            end: "April 2019"
        },
        organisation: "Tata Consultancy Services (Project - Commercial Bank of Dubai)",
        content: <div>
            I primarily interned as a React Native Developer in the organisation, but I also worked on other
            technologies like Angular. This project was for Commercial Bank of Dubai. When I started my internship, I
            had
            to build a mobile application for the client which had speech recognition feature. But as I moved further,
            many possibilities came up and I created a javascript library which could be integrated into any javascript
            project, and with proper configuration, it would understand the context and implement actions like
            navigation, filling forms. Tasks performed during internship were:
            <ul>
                <li> Develop a library to recognize voice commands even when not in English</li>
                <li>
                    Implemented this feature in a new React JS app (MERN Stack with GraphQL), React Native app and an
                    existing Angular app
                </li>
            </ul>
            Results achieved are -
            <ul>
                <li>
                    Improved the existing speech recognition to 90%, reducing recognition time from 10 seconds to 1
                    second
                </li>
                <li>
                    Boosted workplace efficiency by 60%, reducing paperwork time from 5 hours to 2 hours by the speech
                    library
                </li>
            </ul>
        </div>
    }, {
        title: "React Native Intern",
        period: {
            start: "December 2017",
            end: "January 2018"
        },
        organisation: "Dipper Technologies",
        content: <div>
            I interned as a React Native developer in the organisation. I
            worked on building cross platform applications using React
            Native. Since the technology was new to me, it provided a great
            working and learning experience. I worked in a team, and was
            consistently guided by my supervisor to overcome my
            shortcomings. We had two tasks at hand:
            <ul>
                <li> Import one of the existing apps from Ionic Framework to React Native</li>
                <li> Develop and Implement a new EPOD (Electronic Proof of Delivery) application</li>
            </ul>
        </div>
    }, {
        title: "Software Developer Intern",
        period: {
            start: "June 2017",
            end: "July 2017"
        },
        organisation: "NBCC (India) Ltd",
        content: <div>
            I interned as a Software developer in the organisation. I worked
            on building a desktop application for the organisation for the
            purpose of canteen management. I planned and developed the
            complete application on my own with some feedback from my
            colleagues and help from my seniors. I developed the application
            using JavaFx. The main idea was to:
            <ul>
                <li> Reduce labour load and paper wastage</li>
                <li> Efficient and easy to use interface</li>
            </ul>
        </div>
    }
]