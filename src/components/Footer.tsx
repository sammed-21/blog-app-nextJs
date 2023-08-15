import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-[10vh] bottom-0 bg-black-700 flex pt-4 justify-between relative  items-center max-md:mt-10 border-t border-gray-300 max-sm:flex-col'>
      <div>&copy; 2023 Sammed, All rights reserved.</div>
      <div className="flex flex-wrap justify-between space-x-3 opacity-75">
        <Link href="https://github.com/sammed-21"><Image src="/pngwing.com (1).png" alt="facebook blog" width={30}  height={30} /></Link>
        <Link href="https://twitter.com/samjain2001"> <Image src="/3.png" alt="twitter blog" width={30}  height={30} /></Link>
        <Link href="https://www.linkedin.com/in/sammed-betadur-8b9b291a5/"> <Image src="/pngwing.com.png" alt="linkdin blog" width={30}  height={30} /></Link>
        </div>
    </div>
  )
}

export default Footer