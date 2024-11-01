import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function generatePoints(tedadeNoghat) {
    const points = [];
    let insideCircle = 0;

    for (let i = 0; i < tedadeNoghat; i++) {
        const x = Math.random();
        const y = Math.random();
        const isInside = x * x + y * y <= 1;

        if (isInside) {
            insideCircle++;
        }

        points.push({ x, y, isInside });
    }

    const piEstimate = (4 * insideCircle) / tedadeNoghat;
    const outsideCircle = tedadeNoghat - insideCircle; // تعداد نقاط بیرون دایره

    return { points, piEstimate, insideCircle, outsideCircle };
}

const CirclePlot = ({ tedadeNoghat }) => {
    const [pointsData, setPointsData] = useState({ points: [], piEstimate: 0, insideCircle: 0, outsideCircle: 0 });
    const [currentPointIndex, setCurrentPointIndex] = useState(0);

    useEffect(() => {
        const { points, piEstimate, insideCircle, outsideCircle } = generatePoints(tedadeNoghat);
        setPointsData({ points, piEstimate, insideCircle, outsideCircle });
        setCurrentPointIndex(0);
    }, [tedadeNoghat]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPointIndex((prevIndex) => {
                if (prevIndex < pointsData.points.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(intervalId);
                    return prevIndex;
                }
            });
        }, 50);

        return () => clearInterval(intervalId);
    }, [pointsData.points]);

    return (
        <div className="text-center">
            <div className="flex justify-center w-[400px] my-4">
                <svg width="400" height="400" className="bg-white border border-gray-300 rounded-lg shadow-lg">
                    <circle cx="200" cy="200" r="200" fill="none" stroke="blue" strokeWidth="2" />
                    <line x1="200" y1="0" x2="200" y2="400" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="200" x2="400" y2="200" stroke="black" strokeWidth="1" />

                    {pointsData.points.slice(0, currentPointIndex + 1).map((point, index) => (
                        <circle
                            key={index}
                            cx={point.x * 200 + 200}
                            cy={(1 - point.y) * 200}
                            r="2"
                            fill={point.isInside ? "green" : "red"}
                        />
                    ))}
                </svg>
            </div>
            <div className="text-gray-100 text-sm text-center p-2">
                <p>
                    در این نمودار،  نقاط تصادفی رو به‌صورت تصادفی درون مربعی که یک دایره درونش داره، رسم کردم.
                    از این تعداد، 
                    <span className="font-semibold text-green-300"> {pointsData.insideCircle} </span>
                    نقطه داخل دایره قرار گرفتن و
                    <span className="font-semibold text-red-300"> {pointsData.outsideCircle} </span>
                    نقطه بیرون از دایره افتادن.
                </p>
                <p>
                    برای محاسبه‌ی عدد π، نسبت نقاط داخل دایره به کل نقاط رو پیدا و در 4 ضرب کردم.
                </p>
                <p>
                    هر چی تعداد نقاط بیشتر باشه، این تخمین دقیق‌تر می‌شه و به مقدار واقعی عدد π نزدیک‌تر می‌شیم.
                </p>
            </div>
        </div>
    );
};

export default CirclePlot;
