import React from 'react'

import Image from 'next/image'
import { HiOutlineBell } from 'react-icons/hi2';
import { RxDashboard } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineArrowDown, HiOutlineArrowUp, HiOutlineLogout, HiPlus, HiUser } from 'react-icons/hi';


import profile from '../../assets/image/profile-1.jpg'
import transaction1 from '../../assets/image/transaction1.png'
import transaction2 from '../../assets/image/transaction2.png'
import transaction3 from '../../assets/image/transaction3.png'
import transaction4 from '../../assets/image/transaction4.png'


function Home() {
  return (
    <div className='h-screen'>
      <div className='rounded-lg w-full border-solid border-2 h-[120px] bg-[#f5f5f5] shadow-xl'>
        <div className='h-full flex items-center justify-between mx-[7%]'>
          <div className='font-extrabold text-[40px] text-accent text-xl'>chiper<span className='text-[#804242] font-black'>Pay</span></div>
          <div className='flex text-black gap-4 justify-center items-center'>
            <div className='rounded-lg overflow-hidden'>
              <Image src={profile} 
                alt="login-vector" 
                width="50" 
                height="50" />
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Robert Chandler</div>
              <div>0812121212</div>
            </div>
            <div className='text-[25px]'>
              <HiOutlineBell/>
            </div>
          </div>
        </div>


      </div>
      <div className='flex h-[70%] mt-20 gap-8'>
        <div className='flex flex-col justify-between text-black w-[18%] min-w-[250px] bg-[#f5f5f5] ml-20 py-8 pl-20 rounded-lg shadow-xl'>
          <div className='flex flex-col items-left gap-14 w-full'>
            <div className='flex gap-6'>
              <div className='text-[25px]'>
                <RxDashboard/>
              </div>
              <div>Dashboard</div>
            </div>
            <div className='flex gap-6'>
              <div className='text-[25px]'>
                <HiOutlineArrowUp/>
              </div>
              <div>Transfer</div>
            </div>
            <div className='flex gap-6'>
              <div className='text-[25px]'>
                <HiPlus/>
              </div>
              <div>Top Up</div>
            </div>
            <div className='flex gap-6'>
              <div className='text-[25px]'>
                <HiUser/>
              </div>
              <div>Profile</div>
            </div>
            
          </div>
          <div className='flex gap-6'>
              <div className='text-[25px]'>
                <IoIosLogOut/>
              </div>
              <div>Logout</div>
          </div>
        </div>
        <div className='flex flex-col w-[80%] justify-between mr-20 gap-6'>
          <div className='flex justify-between h-[30%] px-10 py-8 text-white bg-accent rounded-lg shadow-xl'>
            <div className='flex flex-col gap-4 justify-between'>
              <div className='text-[20px]'>Balance</div>
              <div className='font-black text-[50px]'>Rp 120.000</div>
              <div>+62 813-9387-7946</div>
            </div>
            <div className='flex flex-col gap-4 justify-between'>
              <div className='btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]'>
                <HiOutlineArrowUp/>  
                <div className=''>Transfer</div>  
              </div>
              <div className='btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]'>
                <HiPlus/>  
                <div className=''>Top Up</div>  
              </div>
            </div>
          </div>
          <div className='flex gap-6 h-[70%] justify-between'>
            <div className='flex-1 rounded-lg shadow-xl bg-[#FFBA7B] px-10 py-10'>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                  <HiOutlineArrowUp className='text-[#1EC05F]'/>
                  <div className='text-md'>Income</div>
                  <div className='font-black text-[15px]'>Rp2.120.000</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <HiOutlineArrowDown className='text-[#ED5533]'/>
                  <div className='text-md'>Expense</div>
                  <div className='font-black text-[15px]'>Rp1.560.000</div>
                </div>
              </div>
              <div></div>
            </div>
            <div className='flex flex-col flex-1 rounded-lg shadow-xl bg-[#F59376] px-10 py-10 justify-between h-full'>
              <div className='font-bold text-[22px]'>Transaction History</div>
              <div className='flex flex-col gap-6 justify-between'>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction1}
                      width='50'
                      height='50'
                      alt='transaction1'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Samuel Suhi</div>
                    <div>Accept</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#1EC05F] text-end'>+Rp 50.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction2}
                      width='50'
                      height='50'
                      alt='transaction2'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Netflix</div>
                    <div>Transfer</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#ED5533] text-end'>-Rp 149.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction3}
                      width='50'
                      height='50'
                      alt='transaction3'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Christine Mar...</div>
                    <div>Accept</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#1EC05F] text-end'>+Rp 150.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction4}
                      width='50'
                      height='50'
                      alt='transaction4'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Robert Chandler</div>
                    <div>Top Up</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#ED5533 text-end'>-Rp249.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home