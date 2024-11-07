import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function generatePoints(tedadeNoghat) {
    const points = [];
    let insideCircle = 0;

    for (let i = 0; i < tedadeNoghat; i++) {
        const x = Math.random() * 2 - 1; // تولید نقطه تصادفی بین -1 و 1 برای x
        const y = Math.random() * 2 - 1; // تولید نقطه تصادفی بین -1 و 1 برای y
        const isInside = x * x + y * y <= 1;

        if (isInside) {
            insideCircle++;
        }

        points.push({ x, y, isInside });
    }

    const outsideCircle = tedadeNoghat - insideCircle; // تعداد نقاط خارج از دایره
    const piEstimate = (4 * insideCircle) / tedadeNoghat;

    // لاگ گرفتن از تعداد نقاط داخل و خارج دایره
    console.log(`تعداد نقاط داخل دایره: ${insideCircle}`);
    console.log(`تعداد نقاط خارج از دایره: ${outsideCircle}`);

    return { points, piEstimate, insideCircle, outsideCircle };
}

const CirclePlot = ({ tedadeNoghat }) => {
    const [pointsData, setPointsData] = useState({ points: [], piEstimate: 0, insideCircle: 0, outsideCircle: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const { points, piEstimate, insideCircle, outsideCircle } = generatePoints(tedadeNoghat);
        setPointsData({ points, piEstimate, insideCircle, outsideCircle });
        setCurrentIndex(0);
    }, [tedadeNoghat]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < pointsData.points.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(intervalId);
                    return prevIndex;
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, [pointsData.points]);

   if(!Index){return (
        <div className="text-center">
            <div className="flex justify-center w-[400px] my-4">
                <svg width="400" height="400" className="bg-white border border-gray-300 rounded-lg shadow-lg">
                    <circle cx="200" cy="200" r="200" fill="none" stroke="blue" strokeWidth="2" />
                    <line x1="200" y1="0" x2="200" y2="400" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="200" x2="400" y2="200" stroke="black" strokeWidth="1" />

                    {pointsData.points.slice(0, currentIndex + 1).map((point, index) => (
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
            <div className="text-gray-100 text-sm text-center p-5">
                <p>
                    سلام! عدد پی (π) رو برات حساب کردم و تقریباً شده 
                    <span className="font-semibold text-yellow-300"> {pointsData.piEstimate.toFixed(3)} </span>. 
                    نقطه‌هایی که اینجا کشیدم دقیقاً نشون میدن که چطوری به این عدد رسیدیم! امیدوارم از دیدنش لذت ببری!
                </p>
            </div>
                <p onClick={()=>setIndex(1)} className='text-white underline cursor-pointer '>
                    اگر می‌خوای بهتر متوجه شی چه اتفاقی افتاده بیا بیشتر توضیح بدم!
                </p>
        </div>
    );}else if (Index==1) {
      return (
        <div className="text-center">

        <div className="flex justify-center w-[400px] my-2">
            <svg width="400" height="400" className="bg-white border border-gray-300 rounded-lg shadow-lg">
                {/* رسم دایره کامل */}
                <circle cx="200" cy="200" r="200" fill="none" stroke="blue" strokeWidth="2" />

                {/* رسم محورهای مختصات */}
                <line x1="200" y1="0" x2="200" y2="400" stroke="black" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="black" strokeWidth="1" />

                {/* نمایش نقاط در کل دایره */}
                {pointsData.points.map((point, index) => (
                    <circle
                        key={index}
                        cx={point.x * 200 + 200} // مقیاس‌دهی x از -1 تا 1 به 0 تا 400
                        cy={(1 - point.y) * 200} // مقیاس‌دهی y از -1 تا 1 به 0 تا 400 (معکوس برای SVG)
                        r="2"
                        fill={point.isInside ? "green" : "red"}
                    />
                ))}
            </svg>
        </div>
        <div className="text-gray-100 text-sm text-center p-1">
        <button onClick={()=>setIndex(0)} className='underline cursor-pointer'> برگشت{' >'}</button>

            <p>
                در این نمودار، نقاط تصادفی رو به‌صورت تصادفی درون مربعی که یک دایره درونش داره، رسم کردم.
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
      )  
    }
};

export default CirclePlot;
