import React, { useState, useEffect } from 'react';

// تابع تولید نقاط تصادفی و بررسی داخل بودن آن‌ها در ربع دایره
function generatePoints(tedadeNoghat) {
    const points = [];
    let insideCircle = 0;

    for (let i = 0; i < tedadeNoghat; i++) {
        const x = Math.random(); // تولید نقطه تصادفی بین 0 و 1 برای x
        const y = Math.random(); // تولید نقطه تصادفی بین 0 و 1 برای y
        const isInside = x * x + y * y <= 1; // بررسی داخل بودن در ربع دایره با شعاع 1

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
      <h2 className="text-xl text-white font-semibold mb-4">
          تخمین عدد پی: <span className="text-white">{pointsData.piEstimate.toFixed(4)}</span>
      </h2>
      <div className="flex justify-center my-4">
          <svg width="400" height="400" className="bg-white border border-gray-300 rounded-lg shadow-lg">
              {pointsData.points.map((point, index) => (
                  <circle
                      key={index}
                      cx={point.x * 400} // مقیاس‌دهی x از 0 تا 1 به 0 تا 400
                      cy={(1 - point.y) * 400} // مقیاس‌دهی y از 0 تا 1 به 0 تا 400 و معکوس‌سازی
                      r="2"
                      fill={point.isInside ? "green" : "red"} // رنگ بر اساس داخل بودن یا نبودن در دایره
                  />
              ))}
          </svg>
      </div>
  </div>
  
    );
};

export default CirclePlot;
