"use client"

import "./Home.scss";
import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
    backgroundImage: string;
    greeting: string;
    name: string;
    description: string;
}
interface SlideProps {
    data: SlideData;
}

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider | null>(null);

    const slides = [
        {
            backgroundImage: "url(https://placehold.co/500)",
            greeting: "I'm",
            name: "Oskar Straszynski",
            description: "A Freelance Web Developer"
        },
        {
            backgroundImage: "url(https://placehold.co/500)",
            greeting: "I'm a",
            name: "web developer",
            description: "based in Warsaw"
        }
    ];

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1));
        }, 5000);  // Change slide every 5 seconds

        return () => {
            clearInterval(autoSlide);  // Cleanup on component unmount
        };
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <section id="home" className="hero">
            <Slider {...settings} className="home-slider owl-carousel">
                {slides.map((slide, index) => (
                    <Slide key={index} data={slide} />
                ))}
            </Slider>
        </section>
    );
}

const Slide: React.FC<SlideProps> = ({ data }) => (
    <div className="slider-item">
        <div className="overlay"></div>
        <div className="container">
            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end"
                 data-scrollax-parent="true">
                <div className="one-third js-fullheight order-md-last img"
                     style={{ backgroundImage: data.backgroundImage }}>
                    <div className="overlay"></div>
                </div>
                <div className="one-forth d-flex align-items-center" data-aos="fade-in"
                     data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                        <span className="subheading">Hello!</span>
                        <h1 className="mb-4 mt-3">{data.greeting} <span>{data.name}</span></h1>
                        <h2 className="mb-4">{data.description}</h2>
                        <p>
                            <a href="#" className="btn btn-primary py-3 px-4">Hire me</a>
                            <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
