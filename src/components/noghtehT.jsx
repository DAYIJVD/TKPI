import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NoghtehT() {
  const [number, setNumber] = useState(''); // برای ذخیره عدد ورودی از کاربر

  return (
    <div className="flex min-h-screen items-center justify-center p-15">
      <div className="w-[450px] h-full text-center opacity-90 bg-blue-500 rounded-lg p-5 flex flex-col items-center justify-center">
        <div className="bg-blue-500 h-[80vh] flex flex-col items-center justify-center">
          <div>
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-l-4 border-r-white pr-5 text-xl text-white font-bold">
              حالا میخای با چند تا نقطه عدد پی رو تخمین بزنی؟
            </h1>
            
          </div>
          <p className='my-3 text-white'>اونو وارد کن تا باهم عدد پی رو تخمین بزنیم</p>

          {/* فیلد ورودی عدد */}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} // به روز رسانی عدد وارد شده
            className="mt-4 p-2 rounded-md bg-white text-blue-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="تعداد نقاط"
          />
          <div className=''>
    <Link to={number.length?`/FT/${number}`:"/go-to"}>
            <button className="mt-4 bg-white text-sm text-blue-500 px-3 py-1 rounded-md font-semibold hover:bg-gray-200">
          تایید
            </button>
          </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
}
