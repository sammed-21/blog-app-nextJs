import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-[10vh] bottom-0 bg-black-700 flex pt-4 justify-between px-[3vh] items-center max-md:mt-10 border-t border-gray-300'>
      <div>&copy; 2023 Sammed, All rights reserved.</div>
      <div className="flex justify-between space-x-3 opacity-75">
        <Link href="https://github.com/sammed-21"><Image src="/github-mark.png" alt="facebook blog" width={20}  height={20} /></Link>
        <Image src="/1.png" alt="facebook blog" width={20}  height={20} />
        <Image src="/2.png" alt="instagram blog" width={20}  height={20} />
        <Image src="/3.png" alt="twitter blog" width={20}  height={20} />
        <Image src="/4.png" alt="youtube blog" width={20}  height={20} />
      </div>
    </div>
  )
}

export default Footer