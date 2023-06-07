import Link from 'next/link';
import React from 'react';

import Image from 'next/image'
import loginImage from '../../assets/image/login-image.png'
import loginVector from '../../assets/image/login-vector.png'
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

function Login() {
  return (
    
    <>
      <section className='flex h-screen'>
        <div className='overflow-hidden relative w-[60%] flex bg-[#F0592C] justify-center items-center'>
          <div className='absolute mt-[110px] self-start w-[5000px] left-[-540px]'>
            <Image src={loginVector} 
                alt="login-vector" 
                width="1650" 
                height="535" />
          </div>
          <div className='h-[80%] w-[50%] flex flex-col justify-center items-start gap-4'>
            <div className='font-extrabold text-[40px] text-base-100 text-xl'>chiper<span className='text-[#804242] font-black'>Pay</span></div>
            <div className='self-center'>
              <div className='relative'>
                <Image src={loginImage} 
                alt="login-image" 
                width="400" 
                height="600" />
              </div>
            </div>
            <div className='font-bold text-[24px]'>App that Covering Banking Needs.</div>
            <div className='font-light text-[16px]'>
                FazzPay is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </div>

          </div>
        </div>
        <div className='w-[40%] bg-[#FBE0D8] flex justify-center items-center'>
          <div className='h-[80%] w-[60%] flex flex-col justify-center items-start gap-8 text-black'>
            <div className='font-bold text-[24px] text-left'>
              Start Accessing Banking Needs
              With All Devices and All Platforms
              With 30.000+ Users
            </div>
            <div>
              Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
            </div>
            <div className='w-full mt-8'>
              <form className='flex flex-col gap-4'>
                <div className='flex flex-col justify-center gap-12'>
                  <div className='flex input input-bordered border-primary relative'>
                    <div className='flex items-center'>
                      <HiOutlineMail className="absolute text-[#9CA3AF]" alt="Email Icon" />
                      <input className='flex-1 w-full h-full ml-[30px] pl-[30px] bg-[#FBE0D8]' type='text' name='email' placeholder='Email' />
                    </div>
                  </div>
                  <div className='flex input input-bordered border-primary relative'>
                    <div className='flex items-center'>
                      <HiLockClosed className='absolute text-[#9CA3AF]'/>
                      <input className='input input-bordered border-primary ml-[30px] bg-[#FBE0D8]' type='password' name='password' placeholder='Password'/>
                    </div>
                  </div>
                </div>
                <Link href="/auth/forgotPassword" className='text-end font-bold hover:text-primary'>Forgot Password?</Link>
                <button type='submit' className='btn bg-[#F0592C] text-white w-full mt-12'>
                  Login
                </button>
              </form>
            </div>
            <div></div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Login