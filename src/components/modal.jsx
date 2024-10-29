// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center opacity-95 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 text-start">
                <h2 className="text-lg font-semibold mb-4">خوش آمدید!</h2>
                <p >این برنامه برای تخمین عدد پی با استفاده از روش مونت کارلو طراحی شده و</p>
                <h6 className="mb-6">
                  در این جا شما می توانید تعداد نقاط تصادفی را تعیین کنید و برای درک بهتر این مسئله نمودار تخمین آن را برای شما رسم کردیم.
                </h6>
                
                <p>
    <h1 style={{ fontWeight:"bold" }}>چکیده ای از روش مونت کارلو برای تخمین عدد π</h1>
    روش مونت کارلو برای تخمین عدد π از شبیه‌سازی تصادفی و هندسه استفاده می‌کند. در این روش:
</p>

<ul>
    <li><strong>تعریف فضا:</strong> یک دایره با شعاع 1 درون یک مربع با ضلع 2 قرار می‌گیرد.</li>
    <li><strong>تولید نقاط تصادفی:</strong> نقاطی به صورت تصادفی در مربع تولید می‌شوند.</li>
    <li><strong>بررسی داخل بودن در دایره:</strong> نقاط بررسی می‌شوند که آیا درون دایره قرار دارند یا خیر (بر اساس معادله 
    <i>x<sup>2</sup> + y<sup>2</sup> ≤ 1</i>).</li>
    <li><strong>محاسبه نسبت:</strong> نسبت نقاط داخل دایره به کل نقاط محاسبه می‌شود.</li>
    <li><strong>تخمین عدد π:</strong> با استفاده از نسبت به‌دست‌آمده، π به صورت 
    <i>π ≈ 4 × (M/N)</i> تخمین زده می‌شود.</li>
</ul>

<p>
    با افزایش تعداد نقاط، دقت تخمین بیشتر می‌شود. این روش به دلیل سادگی و کارایی‌اش در شبیه‌سازی‌های مختلف بسیار مورد استفاده قرار می‌گیرد.
</p>

                <button
                    onClick={onClose}
                    className="bg-blue-500 my-6 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    تأیید
                </button>
            </div>
        </div>
    );
};

export default Modal;
