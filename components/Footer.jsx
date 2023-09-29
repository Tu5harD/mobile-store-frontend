import React from 'react'
import Wrapper from './Wrapper'
import { AiOutlineMail, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=' bg-black text-white pt-14 pb-3 font-urbanist'>
      <Wrapper className=' flex justify-between flex-col md:flex-row gap-[50px] md:gap-[0]'>
        <div className=' flex gap-[50px] md:gap-[75px] lg:gap-[120px] flex-col md:flex-row '>
          <div className=' flex flex-row justify-center md:flex-row  gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0'>
            {/* MENU START */}
            
            <div className='flex flex-col  gap-3 shrink-0 font-urbanist' >

              <div className=' font-oswald font-medium uppercase text-sm cursor-pointer'>
                Find a store
              </div>
              <div className=' font-medium uppercase text-sm cursor-pointer'>
                become a partner
              </div>
              <div className=' font-medium uppercase text-sm cursor-pointer'>
                sign up for email
              </div>
              <div className=' font-medium uppercase text-sm cursor-pointer'>
                send us feedback
              </div>
              <div className=' font-medium uppercase text-sm cursor-pointer'>
                student discount
              </div>

            </div>
           
            {/* MENU END */}


          </div>
          {/* NORMAL MENU END */}
          {/* Right Side */}
          <div className=' flex flex-row md:flex-row justify-center gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0'>
            {/* NORMAL MENU START */}

            <div className=' flex flex-col gap-3 shrink-0'>
              <div className=' font-oswald font-medium uppercase text-sm cursor-pointer'>
                Get help
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Order Status
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Delivery
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Returns
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Payment Options
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Contact Us
              </div>
            </div>
            {/* MENU END */}
            <div className=' flex flex-col gap-3 shrink-0'>
              <div className=' font-oswald font-medium uppercase text-sm cursor-pointer'>
                About nike
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                News
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Careers
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Investors
              </div>
              <div className=' font-medium uppercase text-sm text-white/[0.8]  hover:text-white  cursor-pointer'>
                Sustainability
              </div>

            </div>
            {/* MENU END */}
          </div>
          <div className=' flex  flex-col gap-5 justify-center md:justify-start min-w-[240px]'>
            {/* 
            <div className=' flex flex-col justify-center md:justify-start items-center'>
              <div className='flex justify-start items-start py-2'>
                <label for="price" class="block font-oswald text-lg font-medium leading-6 text-white">NewsLatter</label>
              </div>
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500"><BsFillEnvelopeFill size={15} /></span>
                </div>
                <input type="email" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='Email' />
              </div>
            </div> */}

            <div className=' flex flex-row gap-4 justify-center items-center'>
              <div
                onClick={() => window.open("https:facebook.com", "_blank")}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center hover:bg-white/[0.5] cursor-pointer'
              >
                <FaFacebookF size={20} />

              </div>
              <div
                onClick={() => window.open("https:facebook.com", "_blank")}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center hover:bg-white/[0.5] cursor-pointer'
              >
                <FaTwitter size={20} />

              </div>
              <div
                onClick={() => window.open("https:facebook.com", "_blank")}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center hover:bg-white/[0.5] cursor-pointer'
              >
                <FaYoutube size={20} />

              </div>
              <div
                onClick={() => window.open("https:facebook.com", "_blank")}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center hover:bg-white/[0.5] cursor-pointer'
              >
                <FaInstagram size={20} />

              </div>

            </div>

          </div>
        </div>

      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col  md:flex-row pb-1 gap-[10px] md:gap-0'>
        <div className='text-sm text-white/[o.5] hover:text-white cursor-pointer text-center md:text-left'>
          © 2023 Nike, Inc. All Rights Reserved
        </div>

        <div className='flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center'>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
