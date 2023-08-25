"use client"
import React, { useState, useEffect } from 'react';
import './Navigation.scss';

interface MenuItem {
    href: string;
    label: string;
}
const menuItems: MenuItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "My Blog" },
    { href: "#contact", label: "Contact" },
];

interface NavState {
    scrolled: boolean;
    awake: boolean;
    sleep: boolean;
}
export default function Navigation() {
    const [navState, setNavState] = useState<NavState>({
        scrolled: false,
        awake: false,
        sleep: false
    });
    const [activeHash, setActiveHash] = useState<string>('');

    const [burgerMenuActive, setBurgerMenuActive] = useState<boolean>(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };useEffect(() => {
        setActiveHash(window.location.hash);
    }, []);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        // Find the target section
        const targetSection = document.querySelector(href);
        if (targetSection) {
            // Use scrollIntoView to smoothly scroll to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update the URL hash
            window.history.pushState(null, "", href);
            setActiveHash(href);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSectionId;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                    currentSectionId = section.id;
                }
            });

            if (currentSectionId && `#${currentSectionId}` !== activeHash) {
                window.history.pushState(null, "", `/#${currentSectionId}`);
                setActiveHash(`#${currentSectionId}`);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeHash]);
    useEffect(() => {
        const handleScroll = () => {
            const st = window.scrollY;

            if (st > 150) {
                if (!navState.scrolled) setNavState({ ...navState, scrolled: true });
            } else if (st < 150 && navState.scrolled) {
                setNavState({ ...navState, scrolled: false, sleep: false });
            }

            if (st > 350 && !navState.awake) {
                setNavState({ ...navState, awake: true });
            } else if (st < 350 && navState.awake) {
                setNavState({ ...navState, awake: false, sleep: true });
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navState]);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${navState.scrolled ? 'scrolled' : ''} ${navState.awake ? 'awake' : ''} ${navState.sleep ? 'sleep' : ''}`}
            id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">Oskar</a>
                <button onClick={toggleBurgerMenu} className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className={`navbar-collapse ${burgerMenuActive ? 'show' : ''}`} id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        {menuItems.map(item => (
                            <li key={item.href} className="nav-item">
                                <a href={item.href}
                                   className={`nav-link ${item.href === activeHash ? 'active' : ''}`}
                                   onClick={(e) => handleAnchorClick(e, item.href)}>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}



