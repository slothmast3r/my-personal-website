"use client"

import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import "./Skills.scss"
interface SkillBarProps {
  skillName: string
  progressPercent: number
  colorClass: string
}

const SkillBar: React.FC<SkillBarProps> = ({
  skillName,
  progressPercent,
  colorClass,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentPercent, setCurrentPercent] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (inView) {
      interval = setInterval(() => {
        setCurrentPercent((prev) => {
          if (prev < progressPercent) {
            return prev + 1
          } else {
            clearInterval(interval)
            return prev
          }
        })
      }, 20) // This interval can be adjusted for speed.
    }
    return () => clearInterval(interval)
  }, [inView, progressPercent])

  return (
    <div className="col-md-6 animate-box" ref={ref}>
      <div className="progress-wrap" data-aos="fade-up">
        <h3>{skillName}</h3>
        <div className="progress">
          <div
            className={`progress-bar ${colorClass}`}
            role="progressbar"
            aria-valuenow={currentPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${currentPercent}%` }}
          >
            <span>{currentPercent}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const skillData: SkillBarProps[] = [
  { skillName: "React", progressPercent: 90, colorClass: "color-1" },
  { skillName: "Vue.js", progressPercent: 85, colorClass: "color-2" },
  { skillName: "Next.js", progressPercent: 90, colorClass: "color-3" },
  { skillName: "CSS3", progressPercent: 90, colorClass: "color-4" },
  { skillName: "WordPress", progressPercent: 70, colorClass: "color-5" },
  { skillName: "HTML5", progressPercent: 95, colorClass: "color-6" },
]

const Skills: React.FC = () => {
  return (
    <section className="ftco-section" id="skills">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            className="col-md-12 heading-section text-center"
            data-aos="fade-up"
          >
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              I am a full-stack developer with a strong focus on front-end
              technologies.
            </p>
          </div>
        </div>
        <div className="row">
          {skillData.map((skill, index) => (
            <SkillBar
              key={index}
              skillName={skill.skillName}
              progressPercent={skill.progressPercent}
              colorClass={skill.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
