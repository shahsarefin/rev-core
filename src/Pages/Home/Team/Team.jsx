import React from 'react'
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

const teamMembers = [
    {
        id: 1,
        name: "Mike Johnson",
        position: "Engine Specialist",
        image: team1
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Electrical Systems Expert",
        image: team2
    },
    {
        id: 3,
        name: "Jhon Cena",
        position: "Body Work Specialist",
        image: team3
    }
];

function Team() {
    return (
        <div className='mt-5'>
            <div className='text-center mb-12'>
                <h3 className='text-xl font-bold text-orange-600'>Team</h3>
                <h1 className='text-5xl font-bold my-5'>Meet Our Expert Team</h1>
                <p className='text-lg'>
                    Our skilled professionals are dedicated to providing top-quality service for your vehicle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <div key={member.id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={member.image} alt={member.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{member.name}</h2>
                            <p className="text-orange-600 font-semibold">{member.position}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team