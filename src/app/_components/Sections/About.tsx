"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
export default function About() {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about">
      <div className="container">
        <div className="row d-flex">
          <ImageSection />
          <DescriptionSection />
        </div>
      </div>
    </section>
  )
}

function ImageSection() {
  return (
    <div className="col-md-6 col-lg-5 d-flex">
      <div className="img-about img d-flex align-items-stretch">
        <div className="overlay"></div>
        <div
          className="img d-flex align-self-stretch align-items-center"
          style={{ backgroundImage: "url(/me/me3.png)" }}
        ></div>
      </div>
    </div>
  )
}

function DescriptionSection() {
  return (
    <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
      <div className="row justify-content-start pb-3">
        <HeadingSection />
        <InfoList />
      </div>
      <CounterSection />
    </div>
  )
}

function HeadingSection() {
  return (
    <div className="col-md-12 heading-section" data-aos="fade-up">
      <h1 className="big">About</h1>
      <h2 className="mb-4">About Me</h2>
      <p>
        I&apos;m a Warsaw-based freelance Front-End Developer, specializing in
        crafting visually engaging and user-friendly websites. My expertise lies
        in HTML, CSS, and JavaScript, and I&apos;m dedicated to delivering
        modern and responsive digital experiences that exceed client
        expectations. When Im not coding, I&apos;m exploring Warsaw&apos;s
        culture and drawing inspiration for my work.{" "}
      </p>
    </div>
  )
}

function InfoList() {
  const info = [
    { label: "Name:", value: "Oskar Straszynski" },
    { label: "Email:", value: "oskar@straszynski.pl" },
    { label: "Phone: ", value: "+48 577 966 612" },
  ]

  return (
    <ul className="about-info mt-4 px-md-0 px-2" data-aos="fade-up">
      {info.map((item, index) => (
        <li className="d-flex" key={index}>
          <span>{item.label}</span> <span>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
function CounterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger this effect once.
    threshold: 0.1, // Percentage of the element that's visible.
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (inView) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 120) {
            return prevCount + 1
          } else {
            clearInterval(timer)
            return prevCount
          }
        })
      }, 20) // Adjust this interval to control the speed of the animation
    }
    return () => {
      clearInterval(timer)
    }
  }, [inView])

  return (
    <div className="counter-wrap d-flex mt-md-3" data-aos="fade-up" ref={ref}>
      <div className="text">
        {/* <p className="mb-4">
                    <span className="number">{count}</span>
                    <span>Project complete</span>
                </p> */}
        <p>
          <a href="#" className="btn btn-primary py-3 px-3">
            Download CV
          </a>
        </p>
      </div>
    </div>
  )
}
