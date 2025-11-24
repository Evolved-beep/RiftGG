import React from 'react'
import { Activity, Clock, TrendingUp } from 'lucide-react'

const Features = () => {
    const features = [
        {
            title: "Real-time Stats",
            description: "Get instant access to your latest performance metrics and rankings",
            icon: <Activity />
        },
        {
            title: "Match History",
            description: "Analyze your recent games with detailed statistics and insights",
            icon: <Clock />
        },
        {
            title: "Champion Analytics",
            description: "Track your best champions and discover areas for improvement",
            icon: <TrendingUp />
        }
        ]

  return (
    <div className='max-w-7xl w-full mx-auto md:px-6 my-4'>
        <h2 className='font-heading text-3xl md:text-5xl font-bold text-center mb-8 text-white'>Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
            {features.map((feature, index) => (
                <div  key={index} className='bg-[#152544] border border-[#1E2544] rounded-2xl mx-4 p-8 flex flex-col justify-center text-center items-center mb-4 hover:border-[#5B8DEE] transition-colors'>
                    <span className='text-[#5B8DEE] mb-4'>{feature.icon}</span>
                    <h3 className='text-xl font-bold'>{feature.title}</h3>
                    <p className='text-base text-gray-400'>{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features