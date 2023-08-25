"use client"
import React, { useState, useEffect, useRef } from 'react';

interface CounterData {
    number: number;
    label: string;
}

const countersData: CounterData[] = [
    { number: 100, label: 'Awards' },
    { number: 1200, label: 'Complete Projects' },
    { number: 1200, label: 'Happy Customers' },
    { number: 500, label: 'Cups of coffee' },
];

const Counter: React.FC = () => {
    const [counters, setCounters] = useState<number[]>(new Array(countersData.length).fill(0));
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const intervalDuration = 20; // ms

                const intervals = countersData.map((data, idx) => {
                    const steps = data.number / intervalDuration;
                    let stepCount = 0;

                    return setInterval(() => {
                        stepCount++;
                        setCounters(prev => {
                            const newCounters = [...prev];
                            newCounters[idx] = Math.min((data.number * stepCount) / steps, data.number);
                            return newCounters;
                        });

                        if (stepCount >= steps) {
                            clearInterval(intervals[idx]);
                        }
                    }, intervalDuration);
                });
            }
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            // Cleanup
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={counterRef}
            className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
            id="counter"
        >
            <div className="container">
                <div className="row d-md-flex align-items-center">
                    {countersData.map((data, idx) => (
                        <div key={idx} className="col-md d-flex justify-content-center counter-wrap" data-aos="fade-up">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number={data.number}>
                                        {counters[idx]}
                                    </strong>
                                    <span>{data.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Counter;
