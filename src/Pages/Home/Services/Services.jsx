import React, { useEffect, useState } from 'react'

// Import all images
import img1 from '../../../assets/images/services/1.jpg'
import img2 from '../../../assets/images/services/2.jpg'
import img3 from '../../../assets/images/services/3.jpg'
import img4 from '../../../assets/images/services/4.jpg'
import img5 from '../../../assets/images/services/5.jpg'
import img6 from '../../../assets/images/services/6.jpg'

// Create an array of images
const images = [img1, img2, img3, img4, img5, img6];

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mt-5'>
            <div className='text-center mb-12'>
                <h3 className='text-xl font-bold text-orange-600'>Services</h3>
                <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
                <p className='text-lg'>
                    We are committed to providing top-notch auto care services. 
                    Our team of expert technicians ensures your vehicle receives the best treatment.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={service._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={images[index]} alt={service.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p className="text-orange-600 font-semibold">Price: ${service.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services