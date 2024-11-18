import React from "react";

export const getCertificates = () =>

    <div>
        <strong>Courses</strong>
        <ul>
            {
                Certificates.map(certificate => {
                    if (certificate.isCollection) {
                        return <li>
                            {getCertificateItem(certificate)}
                            <ul>
                                {certificate.elements.map((item, index) =>
                                    <li>
                                        {getCertificateItem(item)}
                                    </li>
                                )}
                            </ul>
                        </li>
                    } else {
                        return <li>{getCertificateItem(certificate)}</li>
                    }
                })
            }
        </ul>
    </div>;

const getCertificateItem = ({title, link}) => link ? <a
    href={link}
    rel="noopener noreferrer" target="_blank">
    {title}
</a> : <div>{title}</div>;

export const Certificates = [{
    title: "Spring & Hibernate (SpringBoot)"
}, {
    title: "React The Complete Guide - Academind"
}, {
    isCollection: true,
    title: "Data Science Specialization by John Hopkin's University (On Going)",
    elements: [
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/6ZHQZ4FTPKWL",
            title: "The Data Scientist's Toolbox"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/DCS8FYKD49NC",
            title: "R Programming"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/M45HZHKW8B3G",
            title: "Getting and Cleaning Data"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/4MBEWRKLERZS",
            title: "Exploratory Data Analysis"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/5HP25VLVTYD9",
            title: "Reproducible Research"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/TN9ZWBSSDD92",
            title: "Statistical Inference"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/certificate/EMCZV9T9AWFR",
            title: "Regression Models"
        }
    ]
}, {
    isCollection: true,
    title: "Developing Applications With Cloud Platform Specialization by Google Cloud",
    link: "https://www.coursera.org/account/accomplishments/specialization/KSDV2WG2PLZ4",
    elements: [
        {
            link: "https://www.coursera.org/account/accomplishments/verify/8VJRACK5E7BL",
            title: "Google Cloud Platform Fundamentals: Core Infrastructure"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/verify/EJF8AW9ERDRY",
            title: "Getting Started With Application Development"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/verify/3NYSFC8YXMY5",
            title: "Securing and Integrating Components of your Application"
        },
        {
            link: "https://www.coursera.org/account/accomplishments/verify/Q2A9E2E7ZAC8",
            title: "App Deployment, Debugging, and Performance"
        }
    ]
}, {
    title: "IBM Blockchain Foundation for Developers by IBM",
    link: "https://www.coursera.org/account/accomplishments/certificate/JTZRZRGX2TGT"
}, {
    title: "Introduction to Computer Science and Programming Using Python by MITx",
    link: "https://courses.edx.org/certificates/9ffea12fbf42414aa6fa545ba49717f7"
}]