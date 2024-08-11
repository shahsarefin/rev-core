import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

function About() {
  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row">
        {/* Image section */}
        <div className="lg:w-1/2 relative mb-10 lg:mb-0">
          <img src={person} alt="Expert mechanic" className="w-4/5 rounded-lg shadow-2xl" />
          <img 
            src={parts} 
            alt="Quality auto parts" 
            className="w-3/5 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        {/* Content section */}
        <div className="lg:w-1/2 lg:pl-10">
          <p className="text-xl font-bold text-orange-500 mb-5">About Us</p>
          <h1 className="text-5xl font-bold mb-5">
            We're Committed to Expert Auto Care
          </h1>
          <p className="py-6">
            With over 25 years of experience in the automotive industry, our team of certified 
            technicians is dedicated to providing top-notch car servicing and repair. We combine 
            cutting-edge diagnostic technology with unparalleled expertise to ensure your vehicle 
            performs at its best.
          </p>
          <p className="py-6">
            Our commitment to quality extends beyond our service bay. We use only premium parts 
            and adhere to the highest industry standards, giving you peace of mind with every 
            mile you drive. Whether you need routine maintenance or complex repairs, trust us 
            to keep your vehicle running smoothly and safely.
          </p>
          <button className="btn btn-error">Learn More About Our Services</button>
        </div>
      </div>
    </div>
  )
}

export default About