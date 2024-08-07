"use client"

import "./Home.scss"
import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface SlideData {
  backgroundImage: string
  greeting: string
  name: string
  description: string
}
interface SlideProps {
  data: SlideData
  isMobile: Boolean
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const slides = [
    {
      backgroundImage: "url('/me/me1.png')",
      greeting: `I\'m`,
      name: "Oskar Straszynski",
      description: "A Freelance Web Developer",
    },
    {
      backgroundImage: "url('/me/me2.png')",
      greeting: "I'm a",
      name: "web developer",
      description: "based in Warsaw",
    },
  ]

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1)
    }, 5000) // Change slide every 5 seconds

    return () => {
      clearInterval(autoSlide) // Cleanup on component unmount
    }
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize) // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize) // Cleanup on component unmount
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <section id="home" className="hero">
      <Slider {...settings} className="home-slider owl-carousel">
        {slides.map((slide, index) => (
          <Slide key={index} data={slide} isMobile={isMobile} />
        ))}
      </Slider>
    </section>
  )
}

const Slide: React.FC<SlideProps> = ({ data, isMobile }) => (
  <div className="slider-item">
    <div className="overlay"></div>
    <div className="container">
      <div
        className="row d-flex no-gutters slider-text align-items-end justify-content-end"
        data-scrollax-parent="true"
      >
        <div
          className="one-third h-screen order-md-last bg-cover bg-no-repeat bg-center order-12"
          style={{ backgroundImage: data.backgroundImage }}
        >
          <div className="overlay"></div>
        </div>
        <div
          className={`${isMobile ? "" : "one-forth"} d-flex align-items-center`}
          data-aos="fade-in"
          data-scrollax=" properties: { translateY: '70%' }"
        >
          <div className="text">
            <span className="subheading">Hello!</span>
            <h1 className="mb-4 mt-3">
              {data.greeting} <span>{data.name}</span>
            </h1>
            <h2 className="mb-4">{data.description}</h2>
            <p>
              <a href="#contact" className="btn btn-primary py-3 px-4">
                Hire me
              </a>
              <a
                href="#projects"
                className="btn btn-white btn-outline-white py-3 px-4"
              >
                My works
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
