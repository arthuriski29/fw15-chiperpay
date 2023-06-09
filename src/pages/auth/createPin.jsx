import Link from 'next/link';
import React from 'react';

import Image from 'next/image'
import loginImage from '../../assets/image/login-image.png'
import loginVector from '../../assets/image/login-vector.png'
import PinInput from '@/components/PinInput';

function createPin() {
  // const [showAlert, setShowAlert] = React.useState(false)
  // const [pin, setPin] = React.useState('')
  // const submitPin = () => {
  //   console.log(pin)
  //   //kirim data ke backend
  // }

  return (
    <>
      <section className='flex h-screen'>
        <div className='overflow-hidden relative md:w-[60%] min-h-screen hidden md:flex bg-[#F0592C] justify-center items-center'>
          <div className='absolute mt-[110px] self-start w-[5000px] left-[-540px]'>
            <Image src={loginVector} 
                alt="login-vector" 
                width="1650" 
                height="535" />
          </div>
          <div className='h-[80%] min-[1311px]:w-[50%] max-[1310px]:w-[392px] flex flex-col justify-center items-start gap-4'>
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
                ChiperPay is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in ChiperPay everyday with worldwide
              users coverage.
            </div>

          </div>
        </div>
        <div className='w-[40%] bg-[#FBE0D8] flex max-[768px]:flex-1 h-screen justify-center items-center'>
          <div className='h-[80%] max-[1022px]:w-[276px] min-[1023px]:w-[60%] max-[768px]:w-[80%] flex flex-col justify-center items-start gap-8 text-black'>
            <div className='font-bold text-[24px] text-left'>
              Secure Your Account, Your Wallet,
              and Your Data With 6 Digits PIN
              That You Created Yourself.
            </div>
            <div>
              Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don&rsquo;t tell anyone about your FazzPay account password and the PIN.            </div>
            <div className='w-full mt-8'>
              <form className='flex flex-col gap-4'>
                <PinInput/>
                <button type='submit' className='btn bg-[#F0592C] text-white w-full mt-6'>
                  Confirm
                </button>
                {/* {showAlert && <div className='alert alert-success max-w-md'>Pin</div>} */}
              </form>
              <div className='text-center mt-8'>Already have an account? Let&rsquo;s <Link href="/auth/login" className='hover:text-primary font-bold text-[#F0592C]'>Login</Link></div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default createPin