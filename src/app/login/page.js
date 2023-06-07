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
        <div className='flex-1 bg-[#F0592C] justify-center items-center'>
          <div className='h-[80%] w-[80%] flex flex-col justify-center items-center'>
            <div>1</div>
            <div>2</div>
            <div>1</div>
            <div>2</div>

          </div>
        </div>
        <div className='flex-1 bg-white'>div 2</div>

      </section>
    </>
  )
}

export default Login