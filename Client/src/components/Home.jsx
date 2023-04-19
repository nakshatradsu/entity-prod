import React, { useRef } from 'react'
import CheckManufacturer from './CheckManufacturer'
import CheckProduct from './CheckProduct'
import Block from '../imgs/Block.png'
import Brand from '../imgs/Brand.png'
import Eth from '../imgs/eth.png'
import '../index.css'

const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    var myRef = useRef(null)
    const executeScroll = () => {
        scrollToRef(myRef)
        myRef = elementRef.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (
        <>
            <section className='dark:bg-[#15161c] dark:text-white'>
                <div class="
          2xl:max-w-7xl
          sm:px-6
          md:px-12
          lg:px-24 lg:py-12
          2xl:px-12
          px-4
          py-6
          mx-auto
        " >
                    <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                        <div class="
              lg:flex-grow lg:w-1/2 lg:pr-24
              md:mb-0
              flex flex-col
              items-start
              mb-16
              text-left
            ">
                            <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">An Upgrade of Trust</span>
                            <h1 class="
                text-neutral-600
                md:text-7xl
                lg:text-5xl
                mb-8
                text-4xl
                font-bold
                leading-none
                tracking-tighter
                bg-gradient-to-r from-[#B02222] via-[#FFA500] to-[#B02222] text-transparent bg-clip-text
              "> Product Entity Verification </h1>
                            <p class="mb-8 text-base leading-relaxed text-left text-black dark:text-white">A Blockchain based application for detecting Counterfeited products in the B2C and B2B supply chain which will benefit businesses in terms of growth, reputation, trust and to customers in getting genuine products in hand.</p>
                            <dl class="md:grid-cols-2 grid grid-cols-1 gap-12">
                                <div>
                                    <dt class="
                    inline-flex
                    items-center
                    w-20
                    h-20
                    justify-center
                    flex-shrink-0
                    mb-5
                  ">
                                        <img src={Block} alt="Block" />
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Detect Product </h2>
                                        <p class="text-base leading-relaxed text-black dark:text-white">Check about the current owner and history of owners of the product.</p>
                                        <a onClick={executeScroll} class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      cursor-pointer
                      font-semibold
                      text-blue-500
                    " title="scroll down"><svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt class="
                    inline-flex
                    items-center
                    justify-center
                    w-20
                    h-20
                    flex-shrink-0
                    mb-5
                  ">
                                        <img src={Brand} alt="Brand" className='rounded-md' />
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Detect Manufacturer </h2>
                                        <p class="text-base leading-relaxed text-black dark:text-white">Verify the address (manufacturer) is genuine or not.</p>
                                        <a href="#checkManufacturer" onClick={executeScroll} class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      font-semibold
                      text-blue-500
                    " title="scroll down"><svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
                            <div>
                                <img class="object-cover object-center mx-auto eth_bg" alt="hero" src={Eth} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className='dark:bg-black dark:text-white'>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0" ref={myRef} id="box">
                        <div class="grid grid-cols-1">
                            <CheckProduct />
                            <CheckManufacturer />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
