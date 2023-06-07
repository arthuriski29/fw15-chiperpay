import Link from 'next/link';
import React from 'react';

import Image from 'next/image'
import loginImage from '../../assets/image/login-image.png'

function Login() {
  return (
    // <div className='flex h-screen justify-center items-center'>
    //   <Link href='/register' className='btn btn-primary'>Go to Register</Link>
    // </div>
    <>
      <section className='flex h-screen'>
        <div className='flex-1 flex bg-[#F0592C] justify-center items-center'>
          <div className='h-[80%] w-[80%] flex flex-col justify-center items-start gap-4'>
            <div className='font-bold text-lg mb-12'>chiperPay</div>
            <div className='self-center'>
              <div>
                <Image src={loginImage} 
                alt="login-image" 
                width="512" 
                height="575" />
              </div>
            </div>
            <div>App that Covering Banking Needs.</div>
            <div>
                FazzPay is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </div>

          </div>
        </div>
        <div className='flex-1 bg-white'>div 2</div>

      </section>
    </>
  )
}

export default Login