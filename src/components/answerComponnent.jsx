// PiEstimator.js
import React, { useEffect, useState } from 'react';
import CirclePlot from './piEstimator'; 
import Modal from './modal'; 
import { useLocation } from 'react-router-dom';

export default function PiEstimator() {
    const router =useLocation()
    console.log(router)
    let currentPoint=router.pathname.split("/")
    console.log(currentPoint)
    const [showModal1, setShowModal1] = useState(true); // وضعیت نمایش مدال


    const closeModal = () => {
        setShowModal1(false); // مخفی کردن مدال
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-5">  
            <div className="w-[480px] h-[680px]  text-center opacity-90 bg-blue-500 rounded-lg p-5 flex flex-col items-center justify-center">
                
                {showModal1 && <Modal onClose={closeModal} />} {/* نمایش مدال در صورت نیاز */}
                <div className="w-full h-[100vh] rounded-lg p-5 pb-10 overflow-hidden">
                    <CirclePlot tedadeNoghat={Number(currentPoint[2])} />
                </div>
             
                <footer className="mt-5 text-gray-300 text-sm">
                    Created by MohammadJavad Norouzi @2024
                </footer>
            </div>
        </div>
    );
}
