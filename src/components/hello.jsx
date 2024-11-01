import React from 'react'
import { Link } from 'react-router-dom'

export default function hello() {
  return (
    <div className="flex min-h-screen items-center justify-center p-15">  
    <div className="w-[450px] h-full text-center opacity-90 bg-blue-500 rounded-lg p-5 flex flex-col items-center justify-center">  
      <div className="bg-blue-500 h-[80vh] flex flex-col items-center justify-center">  
        <div>  
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-l-4 border-r-white pr-5 text-2xl text-white font-bold">  
            سلام دوست عزیز برای شروع کلیک کنید  
          </h1>  
        </div>  
        
        <Link to="/go-to">  
          <button  
            className="mt-4 bg-white text-blue-500 px-3 py-1 rounded-md font-semibold hover:bg-gray-200"  
          >  
            کلیک کنید  
          </button>  
        </Link>  
      </div>  
    </div>  
  </div>  

  )
}
