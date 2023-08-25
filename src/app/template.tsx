"use client"
import {useEffect, useState} from "react";
import AOS from "aos";
import {ScreenLoader} from "@/app/components/ScreenLoader";

export default function Template({ children }: { children: React.ReactNode }) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
        });
    }, []);
    useEffect(() => {
        const setFullHeight = () => {
            const elements = document.querySelectorAll<HTMLElement>('.js-fullheight');
            elements.forEach(element => {
                element.style.height = `${window.innerHeight}px`;
            });
        };

        setFullHeight(); // Initial setting on component mount

        window.addEventListener('resize', setFullHeight); // Update height on window resize

        return () => {
            window.removeEventListener('resize', setFullHeight); // Cleanup on component unmount
        }
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return <div>
        <ScreenLoader showLoader={showLoader} />
        {children}
    </div>
}
