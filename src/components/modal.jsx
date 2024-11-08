// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center opacity-95 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 text-start">
                <h2 className="text-lg font-semibold mb-4">خوش آمدی!</h2>
                <h6>لازم بود که یه توضیحاتی بدم بهت دوست من</h6>
                <p>خیلی خوشحالم که اینجا هستی! من کمک می‌کنم عدد π رو با یه روش جالب به اسم "مونت کارلو" تخمین بزنی.</p>
                <h6 className="mb-6">
                    در این قسمت، شکل و نمودار رو برات می‌سازم تا بفهمی چطور به این تخمین رسیدیم.
                </h6>

                <h1 style={{ fontWeight: "bold" }}>خب، مونت کارلو برای تخمین عدد π چیه؟</h1>
                <p>بذار بهت بگم که این روش چطور کار می‌کنه:</p>

                <ul>
                    <li><strong>اول فضا رو آماده می‌کنیم:</strong> یه دایره با شعاع ۱ داخل مربعی با ضلع ۲ داریم.</li>
                    <li><strong>حالا نقاط تصادفی:</strong> توی این مربع نقاطی رو به‌صورت کاملاً تصادفی تولید می‌کنم.</li>
                    <li><strong>بررسی می‌کنم داخل یا بیرون دایره‌ان:</strong> هر نقطه رو چک می‌کنم ببینم داخل دایره هست یا نه، با فرمول <i>x<sup>2</sup> + y<sup>2</sup> ≤ 1</i>.</li>
                    <li><strong>حالا نسبت رو حساب می‌کنیم:</strong> نسبت نقاط داخل دایره به کل نقاط رو حساب می‌کنم.</li>
                    <li><strong>تخمین عدد π:</strong> با استفاده از این نسبت، π رو به شکل <i>π ≈ 4 × (M/N)</i> تخمین می‌زنم.</li>
                </ul>

                <p>هرچی تعداد نقاط بیشتر بشه، تخمین دقیق‌تر می‌شه. این روش، به خاطر سادگی اون تو شبیه‌سازی‌ها خیلی محبوبه!</p>

                <button
                    onClick={onClose}
                    className="bg-blue-500 my-6 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    باشه، شروع کنیم!
                </button>
            </div>
        </div>
    );
};

export default Modal;
