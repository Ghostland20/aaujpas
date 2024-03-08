import React from 'react'
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <>
        <div className='bg-[--main] text-white flex justify-between items-center py-1 md:py-2 text-sm md:text-lg '>
            <a href="/papers">
            <Marquee speed={100} gradient={false} >
            <div className='flex items-center mr-8'>
                    <span className='mr-8'>
                    CALL FOR PAPERS!
                    </span>

                    <span className='mr-8'>
                    We are pleased to invite you to submit your original and quality research paper(s) that have not been submitted elsewhere, for publication in the JUNE 2024 EDITION of Ambrose Alli University Journal of Physical and Applied Sciences (AAUJPAS). The JUNE 2023 Edition is now available at: www.aaujpas.org
                    </span>


            </div>

            </Marquee>
            </a>
            
        </div>
    </>
  )
}

export default Announcement