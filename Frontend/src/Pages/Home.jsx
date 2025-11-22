import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LocationSearch } from '../Component/LocationSearch';
 import "remixicon/fonts/remixicon.css"

const Home = () => {
  const [pickup,setPickup]=useState("")
  const [destination,setDestination]=useState("")
  const [panelOpen,setPanelOpen]=useState("")
  const panelCloseRef=useRef(null)
  const panelRef=useRef(null)
  const submitHandler=(e)=>{
    e.preventDefault()
  }
  useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])


  return (
    
   <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif" alt="" />
               
            </div>
            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5 ref={panelCloseRef} onClick={() => {setPanelOpen(false)}} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                // setActiveField('pickup')
                            }}
                            value={pickup}
                            onChange={(e)=>setPickup(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                // setActiveField('destination')
                            }}
                            value={destination}
                            onChange={(e)=>setDestination(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                    {/* <button
                        // onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                    </button> */}
                    <LocationSearch/>
                </div>
                <div ref={panelRef} className='bg-white h-0'>
                    
                </div>
            </div>
            <div className=' fixed w-full z-10 bottom-0 bg-white px-3 py-6'>
              <h1 className='text-xl font-semibold'>Choose your veacle</h1>

              <div className='flex border-2 active:border-black rounded-xl w-full p-3 items-center mb-4 justify-between'>
              <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png " alt='uber img' />
               <div className='w-1/2 '>
                   <h4 className='font-medium text-base '>UberGo <span><i class="ri-user-3-fill"></i>4</span> </h4>
                   <h5 className='font-medium text-sm '>2 min away 12:45</h5>
                   <p className='font-medium text-xs text-gray-600 '>Affordable, compact ride</p>
               </div>
               <h2 className='text-xl font-semibold'>$198.20</h2>
            </div>


             <div className='flex border-2 active:border-black rounded-xl w-full p-3 items-center mb-4 justify-between'>
              <img className='h-12' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n " alt='uber img' />
               <div className='w-1/2 '>
                   <h4 className='font-medium text-base '>Moto <span><i class="ri-user-3-fill"></i>1</span> </h4>
                   <h5 className='font-medium text-sm '>2 min away 12:45</h5>
                   <p className='font-medium text-xs text-gray-600 '>Affordable,motor ride  </p>
               </div>
               <h2 className='text-xl font-semibold'>$198.20</h2>
            </div>


             <div className='flex border-2 active:border-black rounded-xl w-full p-3 items-center mb-4 justify-between'>
              <img className='h-12' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n " alt='uber img' />
               <div className='w-1/2 '>
                   <h4 className='font-medium text-base '>UberAuto <span><i class="ri-user-3-fill"></i>3</span> </h4>
                   <h5 className='font-medium text-sm '>2 min away -12:45</h5>
                   <p className='font-medium text-xs text-gray-600 '>Affordable, Auto ride</p>
               </div>
               <h2 className='text-xl font-semibold'>$166.20</h2>
            </div>
               </div>

               
            
        </div>
    )
}

export default Home