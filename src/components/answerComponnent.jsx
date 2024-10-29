// PiEstimator.js
import React, { useEffect, useState } from 'react';
import CirclePlot from './piEstimator'; 
import Modal from './modal'; 
export default function PiEstimator() {
    const [tedadeNoghat, setTedadeNoghat] = useState(1000); // مقدار پیش‌فرض 1000
    const [currentPoints, setCurrentPoints] = useState(1000);
    const [showModal, setShowModal] = useState(true); // وضعیت نمایش مدال
 useEffect(()=>{
if (tedadeNoghat>10000||currentPoints>10000) {
    alert("بیشتر از 10000 نقطه تصادفی برنامه نمی تواند تخمین بزند متاسفم.");
    setCurrentPoints(1000)
    setTedadeNoghat(1000)
}
 },[tedadeNoghat,currentPoints])
    const handleInputChange = (e) => {
        setTedadeNoghat(Number(e.target.value));
    };

    const handlePlot = () => {
        setCurrentPoints(tedadeNoghat);
    };

    const closeModal = () => {
        setShowModal(false); // مخفی کردن مدال
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-5">  
            <div className="w-[450px] h-[600px] text-center opacity-90 bg-blue-500 rounded-lg p-5 flex flex-col items-center justify-center">
                
                {showModal && <Modal onClose={closeModal} />} {/* نمایش مدال در صورت نیاز */}

                <div className="flex items-center gap-3 mb-4">
                    <input
                        type="number"
                        value={tedadeNoghat}
                        onChange={handleInputChange}
                        placeholder="تعداد نقاط"
                        className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
                    />
                    <button 
                        onClick={handlePlot}
                        className="bg-white text-sm text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
                    >
                      رسم مجدد نمودار تخمین
                    </button>
                </div>

                <div className="w-full h-[100vh] rounded-lg p-5 pb-10 overflow-hidden">
                    <CirclePlot tedadeNoghat={currentPoints} />
                </div>
                <footer className="mt-5 text-gray-300 text-sm">
                    Created by MohammadJavad Norouzi @2024
                </footer>
            </div>
        </div>
    );
}
