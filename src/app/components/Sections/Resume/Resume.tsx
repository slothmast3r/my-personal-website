import React from 'react';
import "./Resume.scss"
interface ResumeItemProps {
    date: string;
    title: string;
    position: string;
    description: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ date, title, position, description }) => {
    return (
        <div className="resume-wrap" data-aos="fade-up">
            <span className="date">{date}</span>
            <h2>{title}</h2>
            <span className="position">{position}</span>
            <p className="mt-4">{description}</p>
        </div>
    );
};
const educationData = [
    {
        date: "2022-2023",
        title: "Master",
        position: "University",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    // ... Add other education data here
];

const experienceData = [
    {
        date: "2022-2023",
        title: "Job",
        position: "University",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    // ... Add other experience data here
];

const Resume: React.FC = () => {
    return (
        <section className="ftco-section ftco-no-pb" id="resume">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-10 heading-section text-center" data-aos="fade-up">
                        <h1 className="big big-2">Resume</h1>
                        <h2 className="mb-4">Resume</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {educationData.map((item, index) => (
                            <ResumeItem
                                key={index}
                                date={item.date}
                                title={item.title}
                                position={item.position}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div className="col-md-6">
                        {experienceData.map((item, index) => (
                            <ResumeItem
                                key={index}
                                date={item.date}
                                title={item.title}
                                position={item.position}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 text-center" data-aos="fade-up">
                        <p>
                            <a href="#" className="btn btn-primary py-4 px-5">
                                Download CV
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
