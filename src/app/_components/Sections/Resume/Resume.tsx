import React from "react"
import "./Resume.scss"
interface ResumeItemProps {
  date: string
  title: string
  position: string
  description: string
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  date,
  title,
  position,
  description,
}) => {
  return (
    <div className="resume-wrap" data-aos="fade-up">
      <span className="date">{date}</span>
      <h2>{title}</h2>
      <span className="position">{position}</span>
      <p className="mt-4">{description}</p>
    </div>
  )
}
const educationData = [
  {
    date: "2021-2024",
    title:
      "Bachelor's Degree in Quantitative Methods in Economics and Information Systems",
    position: "Warsaw School of Economics",
    description:
      "I developed strong skills in linear regression and information technology, which I applied in various projects and assignments.",
  },
]

const experienceData = [
  {
    date: "2020-2021",
    title: "FrontEnd Developer",
    position: "Clavo",
    description:
      "I developed a web application using Vue.js. The application was designed with a focus on mobile responsiveness to ensure optimal user experience across all devices.",
  },
]

const Resume: React.FC = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            className="col-md-10 heading-section text-center"
            data-aos="fade-up"
          >
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>Here you can find my education and work experience. </p>
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
              <a href="/api/download" className="btn btn-primary py-4 px-5">
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
