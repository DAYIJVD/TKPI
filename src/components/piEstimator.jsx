import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// تابع تولید نقاط تصادفی و بررسی داخل بودن آن‌ها در ربع اول دایره
function generatePoints(tedadeNoghat) {
    const points = [];
    let insideCircle = 0;

    for (let i = 0; i < tedadeNoghat; i++) {
        const x = Math.random(); // تولید نقطه تصادفی بین 0 و 1 برای x
        const y = Math.random(); // تولید نقطه تصادفی بین 0 و 1 برای y
        const isInside = x * x + y * y <= 1; // بررسی داخل بودن در دایره با شعاع 1

        if (isInside) insideCircle++;

        points.push({ x, y, isInside });
    }

    const piEstimate = (4 * insideCircle) / tedadeNoghat; // تخمین عدد پی بر اساس تعداد نقاط داخل دایره
    return { points, piEstimate };
}

const CirclePlot = ({ tedadeNoghat }) => {
    const [pointsData, setPointsData] = useState({ points: [], piEstimate: 0 });

    useEffect(() => {
        const { points, piEstimate } = generatePoints(tedadeNoghat);
        setPointsData({ points, piEstimate });
    }, [tedadeNoghat]);

    return (
        <div className="text-center">
           
            
            <div className="flex justify-center w-[400px] my-4">
                <svg width="400" height="400" className="bg-white border border-gray-300 rounded-lg shadow-lg">
                    {/* رسم دایره کامل */}
                    <circle cx="200" cy="200" r="200" fill="none" stroke="blue" strokeWidth="2" />

                    {/* رسم محورهای مختصات */}
                    <line x1="200" y1="0" x2="200" y2="400" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="200" x2="400" y2="200" stroke="black" strokeWidth="1" />

                    {/* نمایش نقاط در ربع اول */}
                    {pointsData.points.map((point, index) => (
                        <circle
                            key={index}
                            cx={point.x * 200 + 200} // مقیاس‌دهی x از 0 تا 1 به 200 تا 400 برای قرارگیری در ربع اول
                            cy={(1 - point.y) * 200} // مقیاس‌دهی y از 0 تا 1 به 0 تا 200 (معکوس برای SVG)
                            r="2"
                            fill={point.isInside ? "green" : "red"} // رنگ بر اساس داخل بودن یا نبودن در دایره
                        />
                    ))}
                </svg>
            </div>
            <div className=" text-gray-100 text-sm text-center p-5 ">
                    <p>
                        بعد از انجام محاسبات،  برات  عدد پی (π) رو حدوداً برابر با 
                        <span className="font-semibold text-yellow-300"> {pointsData.piEstimate.toFixed(3)} </span>
                        تخمین زدم. نمودار بالا هم توزیع نقاط رو بهت نشون می‌ده که چطوری به این مقدار رسیدیم!
                    </p>
                </div>
                <Link to={`/anm/${tedadeNoghat}`}>
                <p className='text-white'>
                    اگر میخای بهتر متوجه شی چه اتفاقی افتاده بیا این جا
                </p>
                </Link>
               
        </div>
    );
};

export default CirclePlot;
