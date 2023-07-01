import React from 'react'
import './Body.css';


const Body = () => {
  return (
    <div className='area container'>
        <div className='text-body'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='butt'>
            <button className='button-1'>Shop Now</button>
            <button className='button-2'>Category</button>
        </div>
        <div>
            <p>Also Available On</p>
            <div className='Brand'>
                <img src="src\assets\flipkart.png" alt="flipkart" />
                <img src="src\assets\amazon.png" alt="amazon" />
            </div>
        </div>
        </div>

        <div className='image'>
            <img src="src\assets\shoe_image.png" alt="shoe" />
        </div>
    </div>
  )
}

export default Body
