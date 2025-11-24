"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const HeroSection = () => {
  const [input,setInput] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if(input.trim()){
        const [gameName,tagline] = input.split("#")
        const formatted = `${encodeURIComponent(gameName.trim())}%23${encodeURIComponent(tagline.trim())}`
        router.push(`/summoner/${formatted}`)
    }
  }
  return (
    <div className='relative overflow-hidden min-h-screen bg-[#0a0e27]' id='search'>
         <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#5b8dee]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400] bg-[#7c3aed] rounded-full blur-[150px]" />
        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6'>
            <h1 className='font-heading text-4xl md:text-7xl font-bold mb-4'>
                Welcome to <span className='text-[#5b8dee] drop-shadow-[0_0_25px_rgba(91,141,238,0.5)]'>RiftGG</span>
            </h1>
            <p className='font-body text-lg md:text-xl text-gray-300 max-w-2xl'>Track your League of Legends stats in real time</p>
            <form className='mt-10 flex flex-col md:flex-row gap-4 w-full max-w-2xl' onSubmit={handleSearch}>
               <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder='Enter summoner name... + tag' 
                className='flex-1 px-6 py-3 bg-[#152544] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#5b8dee] transition-colors' />
                <button className='px-8 py-3 bg-[#5b8dee] hover:bg-[#4A7DD9] text-white font-semibold rounded-lg transition-colors'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default HeroSection