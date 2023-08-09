import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='h-[10vh] bottom-0 bg-black-700 flex mt-4 justify-between px-[3vh] items-center max-md:mt-10 border-t border-gray-300'>
      <div>c 2023 sammed, All right reserved</div>
      <div className="flex justify-between space-x-3 opacity-75">
        <Image src="/1.png" alt="facebook blog" width={15}  height={15} />
        <Image src="/2.png" alt="instagram blog" width={15}  height={15} />
        <Image src="/3.png" alt="twitter blog" width={15}  height={15} />
        <Image src="/4.png" alt="youtube blog" width={15}  height={15} />
      </div>
    </div>
  )
}

export default Footer