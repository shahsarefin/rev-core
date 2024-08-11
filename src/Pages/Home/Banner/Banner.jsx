import React from 'react'
import image5 from '../../../assets/images/banner/1.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

function Banner() {
  // Common content for all slides
  const slideContent = {
    title: "Affordable Price For Car Servicing",
    description: "Experience top-notch automotive care without breaking the bank. Our expert technicians deliver premium service to keep your vehicle in peak condition.",
  }

  return (
    <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image5} className="w-full h-full object-cover" alt="Car service" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        <div className="absolute left-5 sm:left-10 right-5 sm:right-10 top-1/2 -translate-y-1/2 transform">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{slideContent.title}</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">{slideContent.description}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="btn btn-sm sm:btn-md btn-error">Discover More</button>
              <button className="btn btn-sm sm:btn-md btn-outline btn-error">Latest Projects</button>
            </div>
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 flex space-x-3">
          <a href="#slide6" className="btn btn-circle btn-sm sm:btn-md btn-error">❮</a>
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md btn-error">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full h-full object-cover" alt="Car service" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        <div className="absolute left-5 sm:left-10 right-5 sm:right-10 top-1/2 -translate-y-1/2 transform">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{slideContent.title}</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">{slideContent.description}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="btn btn-sm sm:btn-md btn-error">Discover More</button>
              <button className="btn btn-sm sm:btn-md btn-outline btn-error">Latest Projects</button>
            </div>
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 flex space-x-3">
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md btn-error">❮</a>
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md btn-error">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full h-full object-cover" alt="Car service" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        <div className="absolute left-5 sm:left-10 right-5 sm:right-10 top-1/2 -translate-y-1/2 transform">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{slideContent.title}</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">{slideContent.description}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="btn btn-sm sm:btn-md btn-error">Discover More</button>
              <button className="btn btn-sm sm:btn-md btn-outline btn-error">Latest Projects</button>
            </div>
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 flex space-x-3">
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md btn-error">❮</a>
          <a href="#slide6" className="btn btn-circle btn-sm sm:btn-md btn-error">❯</a>
        </div>
      </div>

      {/* Slide 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full h-full object-cover" alt="Car service" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        <div className="absolute left-5 sm:left-10 right-5 sm:right-10 top-1/2 -translate-y-1/2 transform">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{slideContent.title}</h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">{slideContent.description}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="btn btn-sm sm:btn-md btn-error">Discover More</button>
              <button className="btn btn-sm sm:btn-md btn-outline btn-error">Latest Projects</button>
            </div>
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="absolute right-5 sm:right-10 bottom-5 sm:bottom-10 flex space-x-3">
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md btn-error">❮</a>
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md btn-error">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Banner